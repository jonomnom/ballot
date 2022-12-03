import autoAnimate from "@formkit/auto-animate";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { X } from "react-feather";
import Created from "./components/Created";
import {
  CallResult,
  Mumbai,
  shortenAddress,
  shortenIfAddress,
  useCall,
  useEtherBalance,
  useEthers,
} from "@usedapp/core";
import useBallot from "./hooks/useBallot";
import { formatStatus } from "./utils/format";
import useChairperson from "./hooks/useChairperson";
import useStatus from "./hooks/useStatus";
import useCandidates from "./hooks/useCandidates";
import Voting from "./components/Voting";
import Ended from "./components/Ended";
import Voters from "./components/Voters";
import Tabs from "./components/Tabs";

export enum Status {
  Created,
  Voting,
  Ended,
}

function App() {
  const { account, deactivate, chainId, activateBrowserWallet, switchNetwork } =
    useEthers();
  // TODO: loading state
  // REFACTOR: use multicall
  const { value: chairperson1, error: chairpersonError } =
    useChairperson() ?? {};

  const chairperson = (chairperson1 && chairperson1[0]) || "";
  const { data: status, loading, error, nextStatus } = useStatus();
  const candidates = useCandidates();
  //   TODO: error handling of wallet  https://usedapp-docs.netlify.app/docs/Guides/Connecting/Handling%20Errors
  // you need to have an account in order for chain id to appear
  function renderContents() {
    if (loading) {
      return null;
    }
    switch (status) {
      case Status.Created:
        return (
          <Created
            candidates={candidates}
            chairperson={chairperson}
            nextStatus={nextStatus}
          />
        );
      case Status.Voting:
        return (
          <Voting
            candidates={candidates}
            chairperson={chairperson}
            nextStatus={nextStatus}
          />
        );
      case Status.Ended:
        return (
          <Ended
            candidates={candidates}
            chairperson={chairperson}
            nextStatus={nextStatus}
          />
        );
      default:
        return null;
    }
  }
  return (
    <div className="flex flex-col items-center justify-center text-white  gap-4 px-4 py-6">
      {!account ? (
        <div className="flex flex-col items-center justify-center text-white  gap-4 px-4 py-6 w-full max-w-md">
          <button
            onClick={activateBrowserWallet}
            className="bg-teal-300 p-3 rounded-sm text-black"
          >
            {" "}
            Connect{" "}
          </button>
        </div>
      ) : account && chainId !== Mumbai.chainId ? (
        <div className="flex flex-col items-center justify-center text-white  gap-4 px-4 py-6 w-full max-w-md">
          Please connect to {`${Mumbai.chainName} (${Mumbai.chainId})`}
          <button
            onClick={() => {
              switchNetwork(Mumbai.chainId);
            }}
          >
            Switch to {Mumbai.chainName}
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center text-white  gap-4 px-4 py-6 w-full max-w-md">
          <p className="bg-gray-600 p-3 rounded-sm text-white w-full text-center">
            {shortenIfAddress(account)}
          </p>
          <button
            onClick={deactivate}
            className="bg-teal-300 p-3 rounded-sm text-black"
          >
            {" "}
            Disconnect{" "}
          </button>
        </div>
      )}

      <h1 className="font-semibold text-2xl">Ballot</h1>
      <p className="text-xs text-gray-400">
        Chairperson: {chairpersonError ? "" : shortenIfAddress(chairperson)}
      </p>
      <div className="bg-slate-600 p-3 rounded-sm">
        {status !== undefined ? formatStatus(status) : ""}
      </div>
      <Tabs chairperson={chairperson}>
        <>{renderContents()}</>
      </Tabs>
    </div>
  );
}

export default App;
