/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAllowList } from "./IAllowList";

export class IAllowListFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAllowList {
    return new Contract(address, _abi, signerOrProvider) as IAllowList;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IAllowList.AccessMode",
        name: "previousMode",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum IAllowList.AccessMode",
        name: "newMode",
        type: "uint8",
      },
    ],
    name: "UpdateAccessMode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "UpdateCallPermission",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_functionSig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    name: "getAccessMode",
    outputs: [
      {
        internalType: "enum IAllowList.AccessMode",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
    ],
    name: "getTokenDepositLimitData",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "depositLimitation",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "depositCap",
            type: "uint256",
          },
        ],
        internalType: "struct IAllowList.Deposit",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_functionSig",
        type: "bytes4",
      },
    ],
    name: "hasSpecialAccessToCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "enum IAllowList.AccessMode",
        name: "_accessMode",
        type: "uint8",
      },
    ],
    name: "setAccessMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
      {
        internalType: "enum IAllowList.AccessMode[]",
        name: "_accessMode",
        type: "uint8[]",
      },
    ],
    name: "setBatchAccessMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_callers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
      {
        internalType: "bytes4[]",
        name: "_functionSigs",
        type: "bytes4[]",
      },
      {
        internalType: "bool[]",
        name: "_enables",
        type: "bool[]",
      },
    ],
    name: "setBatchPermissionToCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_depositLimitation",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_depositCap",
        type: "uint256",
      },
    ],
    name: "setDepositLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_functionSig",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "_enable",
        type: "bool",
      },
    ],
    name: "setPermissionToCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
