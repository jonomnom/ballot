/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BallotInterface extends utils.Interface {
  functions: {
    "addCandidates(string[])": FunctionFragment;
    "candidates(uint256)": FunctionFragment;
    "chairperson()": FunctionFragment;
    "endVote()": FunctionFragment;
    "getCandidatesLength()": FunctionFragment;
    "giveRightToVote(address)": FunctionFragment;
    "startVote()": FunctionFragment;
    "state()": FunctionFragment;
    "vote(uint256)": FunctionFragment;
    "voters(address)": FunctionFragment;
    "winningCandidate()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addCandidates"
      | "candidates"
      | "chairperson"
      | "endVote"
      | "getCandidatesLength"
      | "giveRightToVote"
      | "startVote"
      | "state"
      | "vote"
      | "voters"
      | "winningCandidate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addCandidates",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "candidates",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "chairperson",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endVote", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCandidatesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "giveRightToVote",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "startVote", values?: undefined): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "voters",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "winningCandidate",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addCandidates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "candidates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "chairperson",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCandidatesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "giveRightToVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voters", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "winningCandidate",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Ballot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BallotInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addCandidates(
      candidateNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    candidates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    chairperson(overrides?: CallOverrides): Promise<[string]>;

    endVote(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCandidatesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    giveRightToVote(
      voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startVote(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    vote(
      candidate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    voters(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber] & {
        weight: BigNumber;
        voted: boolean;
        vote: BigNumber;
      }
    >;

    winningCandidate(
      overrides?: CallOverrides
    ): Promise<[string] & { winnerName_: string }>;
  };

  addCandidates(
    candidateNames: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  candidates(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

  chairperson(overrides?: CallOverrides): Promise<string>;

  endVote(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCandidatesLength(overrides?: CallOverrides): Promise<BigNumber>;

  giveRightToVote(
    voter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startVote(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  vote(
    candidate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  voters(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, BigNumber] & {
      weight: BigNumber;
      voted: boolean;
      vote: BigNumber;
    }
  >;

  winningCandidate(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addCandidates(
      candidateNames: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    candidates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    chairperson(overrides?: CallOverrides): Promise<string>;

    endVote(overrides?: CallOverrides): Promise<void>;

    getCandidatesLength(overrides?: CallOverrides): Promise<BigNumber>;

    giveRightToVote(
      voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    startVote(overrides?: CallOverrides): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    vote(
      candidate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    voters(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber] & {
        weight: BigNumber;
        voted: boolean;
        vote: BigNumber;
      }
    >;

    winningCandidate(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addCandidates(
      candidateNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    candidates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chairperson(overrides?: CallOverrides): Promise<BigNumber>;

    endVote(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCandidatesLength(overrides?: CallOverrides): Promise<BigNumber>;

    giveRightToVote(
      voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startVote(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    vote(
      candidate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    voters(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winningCandidate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addCandidates(
      candidateNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    candidates(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chairperson(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endVote(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCandidatesLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    giveRightToVote(
      voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startVote(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vote(
      candidate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    voters(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    winningCandidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}