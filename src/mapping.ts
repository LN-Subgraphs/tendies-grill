import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Approval,
  OwnershipTransferred,
  PayoutClaimed,
  PayoutSnapshotTaken,
  PoolGrilled,
  Transfer
} from "../generated/Contract/Contract"
import { GrillCaller } from "../generated/schema"


export function handlePoolGrilled(event: PoolGrilled): void {
  //create a new grillCaller
//  let grillCaller = event.transaction.from.toHex()
    let id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
    let grillCaller = new GrillCaller(id)

  // if (grillCaller == null) {
  //     // Entity fields can be set using simple assignments
  //   grillCaller.count = BigInt.fromI32(0)
  // }
  //
  //  grillCaller.count = grillCaller.count + BigInt.fromI32(1)

  //assign params to GrillCaller entity
    grillCaller.caller = event.params.tender
    grillCaller.rewardsGrilled = event.params.grillAmount
//
//   //save
    grillCaller.save()
}

export function handleApproval(event: Approval): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayoutClaimed(event: PayoutClaimed): void {}

export function handlePayoutSnapshotTaken(event: PayoutSnapshotTaken): void {}

export function handleTransfer(event: Transfer): void {}
