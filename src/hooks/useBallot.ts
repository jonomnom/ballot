import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

import abi from "../abi/ballot.json";
import config from "../config";
import { Ballot } from "../typechain";

const wethInterface = new utils.Interface(abi);
const contract = new Contract(config.ballot.address, wethInterface) as Ballot;
const useBallot = () => {
  return contract;
};

export default useBallot;
