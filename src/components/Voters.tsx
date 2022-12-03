import { useEthers } from "@usedapp/core";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useGiveRightToVote, useVoterMetadata } from "../hooks/useVotes";

// TODO : admin only permissions
const Voters: React.FC<{ chairperson: string }> = ({ chairperson }) => {
  const { send: giveRightToVote, state } = useGiveRightToVote();
  const loadingTx =
    state.status === "PendingSignature" || state.status === "Mining";
  const { account } = useEthers();
  const [newVoter, setNewVoter] = useState<string>("");
  const newVoterDebounce = useDebounce(newVoter, 1000);
  const {
    loading: loadingVoterMetadata,
    data,
    error: errorVoterMetadata,
  } = useVoterMetadata(newVoterDebounce);
  const handleAddVoter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newVoterDebounce === "") {
      return;
    }
    giveRightToVote(newVoterDebounce);
    setNewVoter("");
    // TODO: scroll.scrollToBottom();
  };
  if (chairperson !== account) {
    return null;
  }
  return (
    // TODO: refactor into formik
    <form className="flex flex-col" onSubmit={(e) => handleAddVoter(e)}>
      <p className="text-xs text-gray-400 pb-5">
        As an admin, you can add more voters. Once you add a voter, you don't
        need to add them again.
      </p>
      <input
        type="text"
        name="name"
        placeholder="Ex: Jonomnom..."
        className="bg-slate-600 rounded-sm w-full focus-within:outline-none p-3 mb-2"
        value={newVoter}
        onChange={(e) => {
          setNewVoter(e.target.value);
        }}
      />
      <input
        type="submit"
        value={
          loadingVoterMetadata ||
          (newVoter !== newVoterDebounce && newVoter !== "")
            ? "Validating user..."
            : errorVoterMetadata
            ? "Invalid address"
            : data && data.weight > 0
            ? "Already a voter"
            : "Add Voter"
        }
        disabled={
          loadingVoterMetadata ||
          (newVoter !== newVoterDebounce && newVoter !== "") ||
          errorVoterMetadata !== undefined ||
          (data && data.weight > 0) ||
          loadingTx
        }
        className="bg-teal-300 rounded-sm text-black hover:cursor-pointer p-3 disabled:bg-slate-600"
      />
    </form>
  );
};

export default Voters;
