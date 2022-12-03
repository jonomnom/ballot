import { Status } from "../App";

export const formatStatus = (index: Status) => {
  switch (index) {
    case Status.Created:
      return "Created";
    case Status.Voting:
      return "Voting";
    case Status.Ended:
      return "Ended";
    default:
      return "Unknown";
  }
};
