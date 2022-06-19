/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { AuthorityScope, authorityScopeBeet } from '../types/AuthorityScope';

/**
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export type DelegateAuctioneerInstructionArgs = {
  scopes: AuthorityScope[];
};
/**
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
const delegateAuctioneerStruct = new beet.FixableBeetArgsStruct<
  DelegateAuctioneerInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['scopes', beet.array(authorityScopeBeet)],
  ],
  'DelegateAuctioneerInstructionArgs',
);
/**
 * Accounts required by the _delegateAuctioneer_ instruction
 *
 * @property [_writable_] auctionHouse
 * @property [_writable_, **signer**] authority
 * @property [] auctioneerAuthority
 * @property [_writable_] ahAuctioneerPda
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export type DelegateAuctioneerInstructionAccounts = {
  auctionHouse: web3.PublicKey;
  authority: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
};

const delegateAuctioneerInstructionDiscriminator = [106, 178, 12, 122, 74, 173, 251, 222];

/**
 * Creates a _DelegateAuctioneer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DelegateAuctioneer
 * @category generated
 */
export function createDelegateAuctioneerInstruction(
  accounts: DelegateAuctioneerInstructionAccounts,
  args: DelegateAuctioneerInstructionArgs,
) {
  const { auctionHouse, authority, auctioneerAuthority, ahAuctioneerPda } = accounts;

  const [data] = delegateAuctioneerStruct.serialize({
    instructionDiscriminator: delegateAuctioneerInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: auctionHouse,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: auctioneerAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: ahAuctioneerPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
    keys,
    data,
  });
  return ix;
}