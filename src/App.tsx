import { shortenIfAddress, useEthers } from "@usedapp/core";
import Created from "./components/Created";
import Ended from "./components/Ended";
import Tabs from "./components/Tabs";
import Voting from "./components/Voting";
import useCandidates from "./hooks/useCandidates";
import useChairperson from "./hooks/useChairperson";
import useStatus from "./hooks/useStatus";
import { formatStatus } from "./utils/format";

export enum Status {
  Created,
  Voting,
  Ended,
}

function App() {
  const { account, deactivate, chainId, activateBrowserWallet } = useEthers();
  // TODO: loading state
  // REFACTOR: use multicall

  // const { data: status, loading, nextStatus } = useStatus();
  const candidates = useCandidates();
  //   TODO: error handling of wallet  https://usedapp-docs.netlify.app/docs/Guides/Connecting/Handling%20Errors
  // you need to have an account in order for chain id to appear
  function renderContents() {
    return <div>Make sure you are on right chain (mumbai)</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center text-white  gap-4 px-4 py-6">
      {!account ? (
        <div className="flex flex-col items-center justify-center text-white  gap-4 px-4 py-6 w-full max-w-md">
          <button
            onClick={() => {
              activateBrowserWallet((err) => {
                console.error(err);
              });
            }}
            className="bg-teal-300 p-3 rounded-sm text-black"
          >
            {" "}
            Connect{" "}
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

      <Tabs chairperson={""}>
        <>{renderContents()}</>
      </Tabs>
    </div>
  );
}

export default App;
