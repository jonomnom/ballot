import { useEthers } from "@usedapp/core";
import { useEffect } from "react";
import { useStartVote } from "../hooks/useVotes";
// TODO: eslint warnings
const Created: React.FC<{
  candidates: Candidate[];
  chairperson: string;
  nextStatus: () => void;
}> = ({ candidates, chairperson, nextStatus }) => {
  const { account } = useEthers();

  const isAdmin = account === chairperson;
  const { send: startVote, state: startVoteState } = useStartVote();
  const handleStartVote = () => {
    try {
      if (!isAdmin) return;
      startVote();
    } catch (e) {
      console.log("ERROR startvote");
    }
  };

  useEffect(() => {
    if (startVoteState.status === "Success") {
      nextStatus();
    }
  }, [startVoteState.status, nextStatus]);

  return (
    <div className="flex flex-col items-center justify-center text-white  gap-4 px-4 w-full max-w-2xl">
      <p className="text-xs text-gray-400">
        Awaiting the chairperson to start the ballot.
      </p>
      {isAdmin ? (
        <button
          className="bg-teal-300 p-3 px-5 rounded-sm w-full text-black disabled:bg-slate-600"
          disabled={
            !isAdmin ||
            startVoteState.status === "PendingSignature" ||
            startVoteState.status === "Mining"
          }
          onClick={() => handleStartVote()}
        >
          Admin: Start Voting Period
        </button>
      ) : (
        <p className="flex flex-row justify-between bg-slate-600 p-3 rounded-sm min-w-full">
          Awaiting the chairperson to start the ballot.
        </p>
      )}
      {candidates.map(({ name }, i) => (
        <div
          key={i}
          className="flex flex-row justify-between bg-slate-600 p-3 rounded-sm min-w-full"
        >
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Created;
