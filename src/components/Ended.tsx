import { useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";
import { X } from "react-feather";
import { useAddCandidates, useWinningVote } from "../hooks/useCandidates";

const Ended: React.FC<{
  candidates: Candidate[];
  chairperson: string;
  nextStatus: () => void;
}> = ({ candidates, nextStatus, chairperson }) => {
  const { send: addCandidates, state: addCandidatesState } = useAddCandidates();
  /* NOTE: Normally, if the contract has a feature like delegation but there isn't actually a way to change it 
  (not meaningful), I would consult with the team if this is a future feature. If it was a future feature, `voters`
  datastructure would be different so in the future it's easier to change. Since this is a coding exercise, I will
  just ignore delegation.
   */
  const [newCandidates, setNewCandidates] = useState<Array<string>>([]);
  const [newCandidate, setNewCandidate] = useState<string>("");
  const { loading: winningVoteLoading, data: winningVote } = useWinningVote();
  const { account } = useEthers();
  const isAdmin = chairperson === account;
  // TODO:
  const winners = candidates.filter(({ name }) => name === winningVote);
  const losers = candidates
    .filter(({ name }) => name !== winningVote)
    .sort((a, b) => b.voteCount - a.voteCount);
  const handleAddCandidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newCandidate === "") {
      return;
    }
    setNewCandidates((c) => [...c, newCandidate]);
    setNewCandidate("");
  };
  const handleRemoveCandidates = (index: number) => {
    setNewCandidates((c) => {
      const newCandidates = [...c];
      newCandidates.splice(index, 1);
      return newCandidates;
    });
  };
  const handleAddCandidates = async () => {
    try {
      addCandidates(newCandidates);
      // resetState();
    } catch (e) {
      console.log("error");
    }
  };
  // hotfix: status doesn't update when addCandidate is success
  useEffect(() => {
    if (addCandidatesState.status === "Success") {
      nextStatus();
    }
  }, [addCandidatesState.status, nextStatus]);

  if (winningVoteLoading) {
    <p>Loading winners</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center text-white gap-4 px-4 w-full max-w-2xl">
      {/* TODO: admin view vs not admin view */}
      {isAdmin ? (
        <>
          <div className="flex flex-row justify-between bg-slate-600 p-3 rounded-sm min-w-full">
            {/* TODO: form validation - empty strings, strings too long*/}
            {/* deleting a long list of items looks weird */}
            <form
              className="flex flex-row justify-between w-full"
              onSubmit={(e) => handleAddCandidate(e)}
            >
              <input
                type="text"
                name="name"
                placeholder="Ex: Jonomnom..."
                className="bg-slate-800 rounded-sm w-full focus-within:outline-none pl-4"
                value={newCandidate}
                onChange={(e) => {
                  setNewCandidate(e.target.value);
                }}
              />
              <input
                type="submit"
                value="Add"
                className=" bg-teal-300 p-3 px-5 rounded-sm text-black hover:cursor-pointer"
              />
            </form>
          </div>
          <button
            className="bg-teal-300 p-3 px-5 rounded-sm w-full text-black disabled:bg-slate-600"
            onClick={() => handleAddCandidates()}
            disabled={
              newCandidates.length === 0 ||
              addCandidatesState.status === "PendingSignature" ||
              addCandidatesState.status === "Mining"
            }
          >
            Admin: Save new candidates {`(${newCandidates.length})`} for next
            round
          </button>
          <p className="text-xs">Note: Saving candidates is irreversible</p>
        </>
      ) : null}
      {newCandidates.map((name, i) => (
        <div
          key={i}
          className="flex flex-row justify-between bg-slate-600 p-3 rounded-sm min-w-full"
        >
          <p>{name}</p>
          <X
            className="hover:cursor-pointer"
            onClick={() => handleRemoveCandidates(i)}
          />
        </div>
      ))}
      <p className="text-xs text-gray-400">
        Voting has ended. Winners are choosen.
      </p>
      <h4>Winner:</h4>
      {winners.map(({ name, voteCount }, i) => (
        <div
          key={i}
          className="flex flex-row justify-between bg-slate-600 p-3 rounded-sm min-w-full"
        >
          <p>{name}</p>
          <p>{voteCount}</p>
        </div>
      ))}
      <h4>Other Candidates</h4>
      {losers.map(({ name, voteCount }, i) => (
        <div
          key={i}
          className="flex flex-row justify-between bg-slate-600 p-3 rounded-sm min-w-full"
        >
          <p>{name}</p>
          <p>{voteCount}</p>
        </div>
      ))}
      <p className="text-xs max-w-md text-slate-400">
        This voting is concluded. The chairperson is preparing the ballot with
        new candidates for the next round.
      </p>
    </div>
  );
};

export default Ended;
