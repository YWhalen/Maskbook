/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export class Airdrop extends Contract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
    clone(): Airdrop
    methods: {
        check(
            index: number | string,
            claimer: string,
            amount: number | string,
            merkleProof: (string | number[])[],
        ): TransactionObject<{
            available: boolean
            start: string
            end: string
            claimable: string
            0: boolean
            1: string
            2: string
            3: string
        }>

        claim(
            index: number | string,
            amount: number | string,
            merkleProof: (string | number[])[],
        ): TransactionObject<void>

        recharge(_total: number | string): TransactionObject<void>

        set_root(root: string | number[]): TransactionObject<void>

        withdraw(): TransactionObject<void>
    }
    events: {
        Claimed: ContractEvent<{
            amount: string
            timestamp: string
            0: string
            1: string
        }>
        Recharged: ContractEvent<{
            total: string
            timestamp: string
            0: string
            1: string
        }>
        RootChanged: ContractEvent<{
            previous: string
            now: string
            0: string
            1: string
        }>
        Withdrawed: ContractEvent<{
            left: string
            timestamp: string
            0: string
            1: string
        }>
        allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
    }
}
