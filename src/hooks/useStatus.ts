import { useCall } from "@usedapp/core";
import { useEffect, useState } from "react";
import { Status } from "../App";
import useBallot from "./useBallot";

export default function useStatus() {
  const contract = useBallot();
  // relaying on block numbers updating is not reliable and makes for bad experience
  const [localStatus, setLocalStatus] = useState<Status>();
  const res = useCall(
    { contract, method: "state", args: [] },
    {
      isStatic: false,
    }
  );
  useEffect(() => {
    // first time this is called, then set localStatus
    if (res?.value && res.value[0] !== undefined && localStatus === undefined) {
      setLocalStatus(res.value[0]);
    }
  }, [res?.value, localStatus]);
  return {
    loading: res === undefined,
    data: localStatus,
    error: res?.error,
    nextStatus: () => {
      setLocalStatus((s) => (s !== undefined ? (s + 1) % 3 : undefined));
    },
  };
}
