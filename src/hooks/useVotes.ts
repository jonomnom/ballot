import { useContractFunction } from "@usedapp/core";
import { BigNumber } from "ethers";
import useBallot from "./useBallot";

export const useVoterMetadata = (addr: string | undefined) => {
  const contract = useBallot();
  // const res = useCall({ contract, method: "voters", args: [addr || ""] });
  if (addr === "") {
  }
  return {
    loading: undefined,
    error: undefined,
    data: undefined,
  };
  // console.log(res?.value);
  // return {
  //   loading: res && res.value === undefined && !res.error,
  //   error: res?.error,
  //   data: res?.value
  //     ? {
  //         vote: res?.value[2] ? (res?.value[2] as BigNumber).toNumber() : 0,
  //         voted: res?.value[1],
  //         weight: res?.value[0] ? (res?.value[0] as BigNumber).toNumber() : 0,
  //       }
  //     : undefined,
  // };
};

export const useChooseVote = () => {
  const contract = useBallot();
  // REFACTOR: use multicall
  // @ts-ignore
  const res = useContractFunction(contract, "vote", {
    transactionName: "Vote",
  });
  return res;
};

export const useStartVote = () => {
  const contract = useBallot();
  // REFACTOR: use multicall
  // @ts-ignore

  const res = useContractFunction(contract, "startVote", {
    transactionName: "StartVote",
  });
  return res;
};

export const useEndVote = () => {
  const contract = useBallot();
  // REFACTOR: use multicall
  // @ts-ignore
  const res = useContractFunction(contract, "endVote", {
    transactionName: "EndVote",
  });

  return res;
};

export const useGiveRightToVote = () => {
  const contract = useBallot();
  // REFACTOR: use multicall
  // @ts-ignore
  const res = useContractFunction(contract, "giveRightToVote", {
    transactionName: "GiveRightToVote",
  });
  return res;
};
