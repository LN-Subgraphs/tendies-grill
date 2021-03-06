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
    let id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
    let grillCaller = new GrillCaller(id)


  //assign params to GrillCaller entity
    grillCaller.caller = event.params.tender
    grillCaller.tokensGrilled = event.params.grillAmount
//
//   //save
    grillCaller.save()
}

export function handleApproval(event: Approval): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayoutClaimed(event: PayoutClaimed): void {
  //create a new payout
    let id = event.transaction.hash.toHexString().concat('-').concat(event.logIndex.toString())
    let payout = new Payout(id)


  //assign params to payout entity
    payout.receiver = event.params.topHolderAddress
    payout.rewardPayout = event.params.claimedReward
//
//   //save
    payout.save()
}

export function handlePayoutSnapshotTaken(event: PayoutSnapshotTaken): void {}

export function handleTransfer(event: Transfer): void {}
