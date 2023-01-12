// import { useEthers } from "@usedapp/core";
// import { useEffect } from "react";
// import { useChooseVote, useEndVote, useVoterMetadata } from "../hooks/useVotes";
// // TODO: eslint warnings
// const Voting: React.FC<{
//   candidates: Candidate[];
//   chairperson: string;
//   nextStatus: () => void;
// }> = ({ candidates, chairperson, nextStatus }) => {
//   const { account } = useEthers();
//   const { send: chooseVote } = useChooseVote();
//   const isAdmin = account === chairperson;
//   const { send: endVote, state: endVoteState } = useEndVote();
//   const { data: voter } = useVoterMetadata(account);
//   //TODO: if voter, they should be able to vote, IF they haven't voted

//   const handleEndVote = () => {
//     try {
//       if (!isAdmin) return;
//       endVote();
//     } catch (e) {
//       console.log("ERROR endvote");
//     }
//   };

//   useEffect(() => {
//     if (endVoteState.status === "Success") {
//       nextStatus();
//     }
//   }, [endVoteState.status, nextStatus]);
//   const handleVote = async (candidateIndex: number) => {
//     try {
//       chooseVote(candidateIndex);
//     } catch (e) {
//       console.log("Error chooseVote");
//     }
//   };
//   return (
//     <div className="flex flex-col items-center justify-center text-white gap-4 px-4 w-full max-w-2xl">
//       {isAdmin ? (
//         <button
//           className="bg-teal-300 p-3 px-5 rounded-sm w-full text-black disabled:bg-slate-600"
//           disabled={
//             !isAdmin ||
//             endVoteState.status === "PendingSignature" ||
//             endVoteState.status === "Mining"
//           }
//           onClick={() => handleEndVote()}
//         >
//           Admin: End Voting Period
//         </button>
//       ) : null}
//       {voter ? (
//         <p className="text-xs text-gray-400">
//           {!voter || voter.weight === 0
//             ? "You are not eligible to vote. Talk with the chairperson to get access."
//             : voter.voted === true
//             ? "Thank you for submitting your vote. Awaiting chairperson to end voting."
//             : "Pick your favorite candidate."}
//         </p>
//       ) : (
//         <p className="text-xs text-gray-400">Loading voter metadata</p>
//       )}
//       {candidates.map(({ name, voteCount }, i) => (
//         <div
//           key={i}
//           className="grid grid-cols-2 w-full bg-slate-600 p-3 rounded-sm"
//         >
//           <p className="pt-1">{name}</p>

//           <div className="flex justify-end pr-2">
//             <p className="text-right pt-1">{voteCount}</p>
//             {voter && !voter.voted && voter.weight > 0 ? (
//               <button
//                 className="text-right bg-teal-300 p-1 rounded-sm text-black ml-5"
//                 onClick={() => handleVote(i)}
//               >
//                 Vote
//               </button>
//             ) : null}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Voting;
export default () => {};
