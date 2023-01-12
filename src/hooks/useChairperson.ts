// import { useCall } from "@usedapp/core";
import useBallot from "./useBallot";

export default function useChairperson() {
  const contract = useBallot();
  // TODO: loading state
  // REFACTOR: use multicall
  const res = {}; // useCall({ contract, method: "chairperson", args: [] });
  return res;
}
