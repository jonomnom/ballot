import { Call, useCall, useCalls, useContractFunction } from "@usedapp/core";
import { BigNumber } from "ethers";
import { useEffect } from "react";
import useBallot from "./useBallot";
import useStatus from "./useStatus";

export default function useCandidates(): Array<Candidate> {
  const contract = useBallot();
  // TODO: loading state
  // REFACTOR: use multicall
  const candidateLength = useCall({
    contract,
    method: "getCandidatesLength",
    args: [],
  });
  const calls: Array<Call> = [];
  for (
    let i = 0;
    candidateLength &&
    candidateLength.value &&
    i < candidateLength.value[0].toNumber();
    i++
  ) {
    calls.push({ contract, method: "candidates", args: [i] });
  }
  const results = useCalls(calls);
  results &&
    results.forEach((result, i) => {
      if (result && result.error) {
        console.error(
          `Error encountered calling 'candidates' on ${calls[i]?.contract.address}: ${result.error.message}`
        );
      }
    });
  const candidates = results.map((res) => {
    return {
      name: res?.value[0] as string,
      voteCount:
        (res?.value[1] && (res?.value[1] as BigNumber).toNumber()) || 0,
    };
  });
  return candidates;
}

export const useAddCandidates = () => {
  const contract = useBallot();
  // TODO: loading state
  // REFACTOR: use multicall
  const res = useContractFunction(contract, "addCandidates", {
    transactionName: "AddCandidates",
  });
  return res;
};

export const useWinningVote = () => {
  const contract = useBallot();
  const candidates = useCandidates();
  // TODO: loading state
  // REFACTOR: use multicall
  const winningVoteRes = useCall({
    contract,
    method: "winningCandidate",
    args: [],
  });
  let loading = false;
  if (winningVoteRes === undefined) {
    loading = true;
  }
  const winningVote =
    (winningVoteRes && winningVoteRes.value && winningVoteRes.value[0]) || 0;

  return { loading, data: winningVote, error: winningVoteRes?.error };
};
