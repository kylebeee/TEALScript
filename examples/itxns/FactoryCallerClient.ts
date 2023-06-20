/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "mintAndGetAsset()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "CREATE"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDgKCWIgbWFpbgoKYmFyZV9yb3V0ZV9jcmVhdGU6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJPT0KCSYmCglhc3NlcnQKCgkvLyBubyBkdXBuIG5lZWRlZAoJY2FsbHN1YiBjcmVhdGUKCWludCAxCglyZXR1cm4KCmNyZWF0ZToKCXByb3RvIDAgMAoJcmV0c3ViCgphYmlfcm91dGVfbWludEFuZEdldEFzc2V0OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cgl0eG4gQXBwbGljYXRpb25JRAoJaW50IDAKCSE9CgkmJgoJYXNzZXJ0CglieXRlIDB4OyBkdXAKCWNhbGxzdWIgbWludEFuZEdldEFzc2V0CglpbnQgMQoJcmV0dXJuCgptaW50QW5kR2V0QXNzZXQ6Cglwcm90byAyIDAKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjM0CgkvLyBzZW5kQXBwQ2FsbCh7CglpdHhuX2JlZ2luCglpbnQgYXBwbAoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6MzUKCS8vIG9uQ29tcGxldGlvbjogJ05vT3AnCglpbnQgTm9PcAoJaXR4bl9maWVsZCBPbkNvbXBsZXRpb24KCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjM2CgkvLyBmZWU6IDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6MzcKCS8vIGNsZWFyU3RhdGVQcm9ncmFtOiB0aGlzLmFwcC5jbGVhclN0YXRlUHJvZ3JhbQoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQ2xlYXJTdGF0ZVByb2dyYW0KCWFzc2VydAoJaXR4bl9maWVsZCBDbGVhclN0YXRlUHJvZ3JhbQoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6MzgKCS8vIGFwcHJvdmFsUHJvZ3JhbTogTkZURmFjdG9yeQoJYnl0ZSBiNjQgQ0NBQ0FBRkNBSWd4R1NJU01SZ2lFaEJFaUFBQ0kwT0tBQUNKTVJraUVqRVlJaE1RUkRZYUFsY0NBRFlhQVZjQ0FJZ0FBaU5EaWdJQXNZRURzaENMLzdJbWkvNnlKU095SWlLeUl5S3lBYk8wUEJhQUJCVWZmSFZNVUxDSk1Sa2lFakVZSWhNUVJEWWFBaGZBSERZYUFSZkFNSWdBQWlORGlnSUFzWUVFc2hDTC9ySVVJN0lTaS8reUVTS3lBYk9KTVJ0QUFBY3hHQ0lTUVA5c2dBVFNBa3h6Z0FSSUlXWndOaG9BamdML2F2K3NBQT09CglpdHhuX2ZpZWxkIEFwcHJvdmFsUHJvZ3JhbQoJaXR4bl9zdWJtaXQKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjQxCgkvLyBmYWN0b3J5QXBwID0gdGhpcy5pdHhuLmNyZWF0ZWRBcHBsaWNhdGlvbklECglpdHhuIENyZWF0ZWRBcHBsaWNhdGlvbklECglmcmFtZV9idXJ5IC0xIC8vIGZhY3RvcnlBcHA6IGFwcGxpY2F0aW9uCgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo0MwoJLy8gc2VuZFBheW1lbnQoewoJaXR4bl9iZWdpbgoJaW50IHBheQoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6NDQKCS8vIGFtb3VudDogMjAwXzAwMAoJaW50IDIwMF8wMDAKCWl0eG5fZmllbGQgQW1vdW50CgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo0NQoJLy8gZmVlOiAwCglpbnQgMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjQ2CgkvLyByZWNlaXZlcjogZmFjdG9yeUFwcC5hZGRyZXNzCglmcmFtZV9kaWcgLTEgLy8gZmFjdG9yeUFwcDogYXBwbGljYXRpb24KCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJaXR4bl9maWVsZCBSZWNlaXZlcgoJaXR4bl9zdWJtaXQKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjQ5CgkvLyBjcmVhdGVkQXNzZXQgPSBzZW5kTWV0aG9kQ2FsbDxbc3RyaW5nLCBzdHJpbmddLCBBc3NldD4oewoJaXR4bl9iZWdpbgoJaW50IGFwcGwKCWl0eG5fZmllbGQgVHlwZUVudW0KCW1ldGhvZCAiY3JlYXRlTkZUKHN0cmluZyxzdHJpbmcpdWludDY0IgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjUwCgkvLyBhcHBsaWNhdGlvbklEOiBmYWN0b3J5QXBwCglmcmFtZV9kaWcgLTEgLy8gZmFjdG9yeUFwcDogYXBwbGljYXRpb24KCWl0eG5fZmllbGQgQXBwbGljYXRpb25JRAoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6NTIKCS8vIG1ldGhvZEFyZ3M6IFsnTXkgTkZUJywgJ01ORlQnXQoJYnl0ZSAiTXkgTkZUIgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCWJ5dGUgIk1ORlQiCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6NTMKCS8vIG9uQ29tcGxldGlvbjogJ05vT3AnCglpbnQgTm9PcAoJaXR4bl9maWVsZCBPbkNvbXBsZXRpb24KCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjU0CgkvLyBmZWU6IDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoJaXR4bl9zdWJtaXQKCWl0eG4gTnVtTG9ncwoJaW50IDEKCS0KCWl0eG5hcyBMb2dzCglleHRyYWN0IDQgMAoJYnRvaQoJZnJhbWVfYnVyeSAtMiAvLyBjcmVhdGVkQXNzZXQ6IGFzc2V0CgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo1NwoJLy8gc2VuZEFzc2V0VHJhbnNmZXIoewoJaXR4bl9iZWdpbgoJaW50IGF4ZmVyCglpdHhuX2ZpZWxkIFR5cGVFbnVtCgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo1OAoJLy8gYXNzZXRSZWNlaXZlcjogdGhpcy5hcHAuYWRkcmVzcwoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjU5CgkvLyBhc3NldEFtb3VudDogMAoJaW50IDAKCWl0eG5fZmllbGQgQXNzZXRBbW91bnQKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjYwCgkvLyB4ZmVyQXNzZXQ6IGNyZWF0ZWRBc3NldAoJZnJhbWVfZGlnIC0yIC8vIGNyZWF0ZWRBc3NldDogYXNzZXQKCWl0eG5fZmllbGQgWGZlckFzc2V0CgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo2MQoJLy8gZmVlOiAwCglpbnQgMAoJaXR4bl9maWVsZCBGZWUKCWl0eG5fc3VibWl0CgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo2NAoJLy8gc2VuZE1ldGhvZENhbGw8W0Fzc2V0LCBBY2NvdW50XSwgdm9pZD4oewoJaXR4bl9iZWdpbgoJaW50IGFwcGwKCWl0eG5fZmllbGQgVHlwZUVudW0KCW1ldGhvZCAidHJhbnNmZXJORlQoYXNzZXQsYWNjb3VudCl2b2lkIgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjY1CgkvLyBhcHBsaWNhdGlvbklEOiBmYWN0b3J5QXBwCglmcmFtZV9kaWcgLTEgLy8gZmFjdG9yeUFwcDogYXBwbGljYXRpb24KCWl0eG5fZmllbGQgQXBwbGljYXRpb25JRAoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6NjcKCS8vIG1ldGhvZEFyZ3M6IFtjcmVhdGVkQXNzZXQsIHRoaXMuYXBwLmFkZHJlc3NdCglmcmFtZV9kaWcgLTIgLy8gY3JlYXRlZEFzc2V0OiBhc3NldAoJaXR4bl9maWVsZCBBc3NldHMKCWludCAwCglpdG9iCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglpdHhuX2ZpZWxkIEFjY291bnRzCglpbnQgMQoJaXRvYgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCgkvLyBleGFtcGxlcy9pdHhucy9pdHhucy5hbGdvLnRzOjY4CgkvLyBmZWU6IDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIGV4YW1wbGVzL2l0eG5zL2l0eG5zLmFsZ28udHM6NjkKCS8vIG9uQ29tcGxldGlvbjogJ05vT3AnCglpbnQgTm9PcAoJaXR4bl9maWVsZCBPbkNvbXBsZXRpb24KCWl0eG5fc3VibWl0CgoJLy8gZXhhbXBsZXMvaXR4bnMvaXR4bnMuYWxnby50czo3MgoJLy8gcmV0dXJuIGNyZWF0ZWRBc3NldDsKCWZyYW1lX2RpZyAtMiAvLyBjcmVhdGVkQXNzZXQ6IGFzc2V0CglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCm1haW46Cgl0eG4gTnVtQXBwQXJncwoJYm56IHJvdXRlX2FiaQoJdHhuIEFwcGxpY2F0aW9uSUQKCWludCAwCgk9PQoJYm56IGJhcmVfcm91dGVfY3JlYXRlCgpyb3V0ZV9hYmk6CgltZXRob2QgIm1pbnRBbmRHZXRBc3NldCgpdWludDY0IgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX21pbnRBbmRHZXRBc3NldAoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDgKaW50IDEKcmV0dXJu"
  },
  "contract": {
    "name": "FactoryCaller",
    "desc": "",
    "methods": [
      {
        "name": "mintAndGetAsset",
        "args": [],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the FactoryCaller smart contract.
 */
export type FactoryCaller = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'mintAndGetAsset()uint64' | 'mintAndGetAsset', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type FactoryCallerSig = keyof FactoryCaller['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends FactoryCallerSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the FactoryCaller smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends FactoryCallerSig> = FactoryCaller['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the FactoryCaller smart contract to the method's return type
 */
export type MethodReturn<TSignature extends FactoryCallerSig> = FactoryCaller['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type FactoryCallerCreateCalls = (typeof FactoryCallerCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type FactoryCallerCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type FactoryCallerDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: FactoryCallerCreateCalls) => FactoryCallerCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class FactoryCallerCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the FactoryCaller smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the mintAndGetAsset()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static mintAndGetAsset(args: MethodArgs<'mintAndGetAsset()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'mintAndGetAsset()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the FactoryCaller smart contract
 */
export class FactoryCallerClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `FactoryCallerClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof FactoryCaller['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the FactoryCaller smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: FactoryCallerDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(FactoryCallerCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the FactoryCaller smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & CoreAppCallArgs & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<undefined>> {
        return $this.appClient.create(args) as unknown as Promise<AppCallTransactionResultOfType<undefined>>
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the FactoryCaller smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the mintAndGetAsset()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public mintAndGetAsset(args: MethodArgs<'mintAndGetAsset()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(FactoryCallerCallFactory.mintAndGetAsset(args, params))
  }

  public compose(): FactoryCallerComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      mintAndGetAsset(args: MethodArgs<'mintAndGetAsset()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.mintAndGetAsset(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as FactoryCallerComposer
  }
}
export type FactoryCallerComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the mintAndGetAsset()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  mintAndGetAsset(args: MethodArgs<'mintAndGetAsset()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): FactoryCallerComposer<[...TReturns, MethodReturn<'mintAndGetAsset()uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the FactoryCaller smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): FactoryCallerComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): FactoryCallerComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<FactoryCallerComposerResults<TReturns>>
}
export type FactoryCallerComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
