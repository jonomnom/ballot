import React from "react";

import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";

import { useCall, useEthers } from "@usedapp/core";

import { Ballot } from "../typechain";
import abi from "../abi/ballot.json";
import config from "../config";

const wethInterface = new utils.Interface(abi);
const contract = new Contract(config.ballot.address, wethInterface) as Ballot;
const useBallot = () => {
  return contract;
};

export default useBallot;
