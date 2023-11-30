/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import type { TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "setMyContact(string,string)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "addContact(string,string,address)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "updateContactField(string,string,address)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "verifyContactName(string,address)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "myContact": {
          "type": "bytes",
          "key": "myContact"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNjUuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIHNldE15Q29udGFjdChzdHJpbmcsc3RyaW5nKXZvaWQKYWJpX3JvdXRlX3NldE15Q29udGFjdDoKCWJ5dGUgMHggLy8gcHVzaCBlbXB0eSBieXRlcyB0byBmaWxsIHRoZSBzdGFjayBmcmFtZSBmb3IgdGhpcyBzdWJyb3V0aW5lJ3MgbG9jYWwgdmFyaWFibGVzCgoJLy8gY29tcGFueTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglleHRyYWN0IDIgMAoKCS8vIG5hbWU6IHN0cmluZwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZXh0cmFjdCAyIDAKCgkvLyBleGVjdXRlIHNldE15Q29udGFjdChzdHJpbmcsc3RyaW5nKXZvaWQKCWNhbGxzdWIgc2V0TXlDb250YWN0CglpbnQgMQoJcmV0dXJuCgpzZXRNeUNvbnRhY3Q6Cglwcm90byAzIDAKCgkvLyBleGFtcGxlcy90dXBsZV9pbl9ib3gvYXBwLmFsZ28udHM6MTIKCS8vIGNvbnRhY3Q6IENvbnRhY3QgPSB7IG5hbWU6IG5hbWUsIGNvbXBhbnk6IGNvbXBhbnkgfQoJYnl0ZSAweCAvLyBpbml0aWFsIGhlYWQKCWJ5dGUgMHggLy8gaW5pdGlhbCB0YWlsCglieXRlIDB4MDAwNCAvLyBpbml0aWFsIGhlYWQgb2Zmc2V0CglmcmFtZV9kaWcgLTEgLy8gbmFtZTogc3RyaW5nCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJY2FsbHN1YiBwcm9jZXNzX2R5bmFtaWNfdHVwbGVfZWxlbWVudAoJZnJhbWVfZGlnIC0yIC8vIGNvbXBhbnk6IHN0cmluZwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNhbGxzdWIgcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQKCXBvcCAvLyBwb3AgaGVhZCBvZmZzZXQKCWNvbmNhdCAvLyBjb25jYXQgaGVhZCBhbmQgdGFpbAoJZnJhbWVfYnVyeSAtMyAvLyBjb250YWN0OiBDb250YWN0CgoJLy8gZXhhbXBsZXMvdHVwbGVfaW5fYm94L2FwcC5hbGdvLnRzOjE0CgkvLyB0aGlzLm15Q29udGFjdC52YWx1ZSA9IGNvbnRhY3QKCWJ5dGUgMHg2ZDc5NDM2ZjZlNzQ2MTYzNzQgLy8gIm15Q29udGFjdCIKCWZyYW1lX2RpZyAtMyAvLyBjb250YWN0OiBDb250YWN0CglhcHBfZ2xvYmFsX3B1dAoKCS8vIGV4YW1wbGVzL3R1cGxlX2luX2JveC9hcHAuYWxnby50czoxNQoJLy8gdGhpcy5jb250YWN0cyh0aGlzLnR4bi5zZW5kZXIpLnZhbHVlID0gY29udGFjdAoJdHhuIFNlbmRlcgoJZHVwCglib3hfZGVsCglwb3AKCWZyYW1lX2RpZyAtMyAvLyBjb250YWN0OiBDb250YWN0Cglib3hfcHV0CglyZXRzdWIKCi8vIGFkZENvbnRhY3QoYWRkcmVzcyxzdHJpbmcsc3RyaW5nKXZvaWQKYWJpX3JvdXRlX2FkZENvbnRhY3Q6CglieXRlIDB4IC8vIHB1c2ggZW1wdHkgYnl0ZXMgdG8gZmlsbCB0aGUgc3RhY2sgZnJhbWUgZm9yIHRoaXMgc3Vicm91dGluZSdzIGxvY2FsIHZhcmlhYmxlcwoKCS8vIGFkZHJlc3M6IGFkZHJlc3MKCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWR1cAoJbGVuCglpbnQgMzIKCT09Cglhc3NlcnQKCgkvLyBjb21wYW55OiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWV4dHJhY3QgMiAwCgoJLy8gbmFtZTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIGV4ZWN1dGUgYWRkQ29udGFjdChhZGRyZXNzLHN0cmluZyxzdHJpbmcpdm9pZAoJY2FsbHN1YiBhZGRDb250YWN0CglpbnQgMQoJcmV0dXJuCgphZGRDb250YWN0OgoJcHJvdG8gNCAwCgoJLy8gZXhhbXBsZXMvdHVwbGVfaW5fYm94L2FwcC5hbGdvLnRzOjE5CgkvLyBjb250YWN0OiBDb250YWN0ID0geyBuYW1lOiBuYW1lLCBjb21wYW55OiBjb21wYW55IH0KCWJ5dGUgMHggLy8gaW5pdGlhbCBoZWFkCglieXRlIDB4IC8vIGluaXRpYWwgdGFpbAoJYnl0ZSAweDAwMDQgLy8gaW5pdGlhbCBoZWFkIG9mZnNldAoJZnJhbWVfZGlnIC0xIC8vIG5hbWU6IHN0cmluZwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNhbGxzdWIgcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQKCWZyYW1lX2RpZyAtMiAvLyBjb21wYW55OiBzdHJpbmcKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0CgljYWxsc3ViIHByb2Nlc3NfZHluYW1pY190dXBsZV9lbGVtZW50Cglwb3AgLy8gcG9wIGhlYWQgb2Zmc2V0Cgljb25jYXQgLy8gY29uY2F0IGhlYWQgYW5kIHRhaWwKCWZyYW1lX2J1cnkgLTQgLy8gY29udGFjdDogQ29udGFjdAoKCS8vIGV4YW1wbGVzL3R1cGxlX2luX2JveC9hcHAuYWxnby50czoyMAoJLy8gdGhpcy5jb250YWN0cyhhZGRyZXNzKS52YWx1ZSA9IGNvbnRhY3QKCWZyYW1lX2RpZyAtMyAvLyBhZGRyZXNzOiBhZGRyZXNzCglkdXAKCWJveF9kZWwKCXBvcAoJZnJhbWVfZGlnIC00IC8vIGNvbnRhY3Q6IENvbnRhY3QKCWJveF9wdXQKCXJldHN1YgoKLy8gdXBkYXRlQ29udGFjdEZpZWxkKGFkZHJlc3Msc3RyaW5nLHN0cmluZyl2b2lkCmFiaV9yb3V0ZV91cGRhdGVDb250YWN0RmllbGQ6CgkvLyBhZGRyZXNzOiBhZGRyZXNzCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCglkdXAKCWxlbgoJaW50IDMyCgk9PQoJYXNzZXJ0CgoJLy8gdmFsdWU6IHN0cmluZwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJZXh0cmFjdCAyIDAKCgkvLyBmaWVsZDogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIGV4ZWN1dGUgdXBkYXRlQ29udGFjdEZpZWxkKGFkZHJlc3Msc3RyaW5nLHN0cmluZyl2b2lkCgljYWxsc3ViIHVwZGF0ZUNvbnRhY3RGaWVsZAoJaW50IDEKCXJldHVybgoKdXBkYXRlQ29udGFjdEZpZWxkOgoJcHJvdG8gMyAwCgoJLy8gaWYwX2NvbmRpdGlvbgoJLy8gZXhhbXBsZXMvdHVwbGVfaW5fYm94L2FwcC5hbGdvLnRzOjI0CgkvLyBmaWVsZCA9PT0gJ25hbWUnCglmcmFtZV9kaWcgLTEgLy8gZmllbGQ6IHN0cmluZwoJYnl0ZSAweDZlNjE2ZDY1IC8vICJuYW1lIgoJPT0KCWJ6IGlmMF9lbHNlaWYxX2NvbmRpdGlvbgoKCS8vIGlmMF9jb25zZXF1ZW50CgkvLyBleGFtcGxlcy90dXBsZV9pbl9ib3gvYXBwLmFsZ28udHM6MjUKCS8vIHRoaXMuY29udGFjdHMoYWRkcmVzcykudmFsdWUubmFtZSA9IHZhbHVlCglmcmFtZV9kaWcgLTMgLy8gYWRkcmVzczogYWRkcmVzcwoJYm94X2dldAoJYXNzZXJ0CglzdG9yZSAyNTUgLy8gZnVsbCBhcnJheQoJaW50IDAKCWR1cAoJc3RvcmUgMjUxIC8vIGVsZW1lbnQgaGVhZCBvZmZzZXQKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXVuY292ZXIgMgoJZXh0cmFjdF91aW50MTYKCWR1cAoJc3RvcmUgMjU0IC8vIGVsZW1lbnQgc3RhcnQKCWR1cCAvLyBkdXBsaWNhdGUgc3RhcnQgb2YgZWxlbWVudAoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJc3dhcAoJZXh0cmFjdF91aW50MTYgLy8gZ2V0IG51bWJlciBvZiBlbGVtZW50cwoJaW50IDEgLy8gZ2V0IHR5cGUgbGVuZ3RoCgkqIC8vIG11bHRpcGx5IGJ5IHR5cGUgbGVuZ3RoCglpbnQgMgoJKyAvLyBhZGQgdHdvIGZvciBsZW5ndGgKCXN0b3JlIDI1MyAvLyBlbGVtZW50IGxlbmd0aAoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJaW50IDAKCWxvYWQgMjU0IC8vIGVsZW1lbnQgc3RhcnQKCXN1YnN0cmluZzMKCWZyYW1lX2RpZyAtMiAvLyB2YWx1ZTogc3RyaW5nCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJZHVwCglzdG9yZSAyNTIgLy8gbmV3IGVsZW1lbnQKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCWxvYWQgMjU0IC8vIGVsZW1lbnQgc3RhcnQKCWxvYWQgMjUzIC8vIGVsZW1lbnQgbGVuZ3RoCgkrIC8vIGdldCBlbmQgb2YgRWxlbWVudAoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJbGVuCglzdWJzdHJpbmczCgljb25jYXQKCWNvbmNhdAoJc3RvcmUgMjU1IC8vIGZ1bGwgYXJyYXkKCWNhbGxzdWIgZ2V0X2xlbmd0aF9kaWZmZXJlbmNlCglsb2FkIDI1MCAvLyBsZW5ndGggZGlmZmVyZW5jZQoJbG9hZCAyNTEgLy8gZWxlbWVudCBoZWFkIG9mZnNldAoJaW50IDIKCSsgLy8gaGVhZCBvZnNldAoJY2FsbHN1YiB1cGRhdGVfZHluYW1pY19oZWFkCglsb2FkIDI1NSAvLyBmdWxsIGFycmF5CglmcmFtZV9kaWcgLTMgLy8gYWRkcmVzczogYWRkcmVzcwoJZHVwCglib3hfZGVsCglwb3AKCXN3YXAKCWJveF9wdXQKCWIgaWYwX2VuZAoKaWYwX2Vsc2VpZjFfY29uZGl0aW9uOgoJLy8gZXhhbXBsZXMvdHVwbGVfaW5fYm94L2FwcC5hbGdvLnRzOjI2CgkvLyBmaWVsZCA9PT0gJ2NvbXBhbnknCglmcmFtZV9kaWcgLTEgLy8gZmllbGQ6IHN0cmluZwoJYnl0ZSAweDYzNmY2ZDcwNjE2ZTc5IC8vICJjb21wYW55IgoJPT0KCWJ6IGlmMF9lbHNlCgoJLy8gaWYwX2Vsc2VpZjFfY29uc2VxdWVudAoJLy8gZXhhbXBsZXMvdHVwbGVfaW5fYm94L2FwcC5hbGdvLnRzOjI3CgkvLyB0aGlzLmNvbnRhY3RzKGFkZHJlc3MpLnZhbHVlLmNvbXBhbnkgPSB2YWx1ZQoJZnJhbWVfZGlnIC0zIC8vIGFkZHJlc3M6IGFkZHJlc3MKCWJveF9nZXQKCWFzc2VydAoJc3RvcmUgMjU1IC8vIGZ1bGwgYXJyYXkKCWludCAyCglkdXAKCXN0b3JlIDI1MSAvLyBlbGVtZW50IGhlYWQgb2Zmc2V0Cglsb2FkIDI1NSAvLyBmdWxsIGFycmF5Cglsb2FkIDI1NSAvLyBmdWxsIGFycmF5Cgl1bmNvdmVyIDIKCWV4dHJhY3RfdWludDE2CglkdXAKCXN0b3JlIDI1NCAvLyBlbGVtZW50IHN0YXJ0CglkdXAgLy8gZHVwbGljYXRlIHN0YXJ0IG9mIGVsZW1lbnQKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWV4dHJhY3RfdWludDE2IC8vIGdldCBudW1iZXIgb2YgZWxlbWVudHMKCWludCAxIC8vIGdldCB0eXBlIGxlbmd0aAoJKiAvLyBtdWx0aXBseSBieSB0eXBlIGxlbmd0aAoJaW50IDIKCSsgLy8gYWRkIHR3byBmb3IgbGVuZ3RoCglzdG9yZSAyNTMgLy8gZWxlbWVudCBsZW5ndGgKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCWludCAwCglsb2FkIDI1NCAvLyBlbGVtZW50IHN0YXJ0CglzdWJzdHJpbmczCglmcmFtZV9kaWcgLTIgLy8gdmFsdWU6IHN0cmluZwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWR1cAoJc3RvcmUgMjUyIC8vIG5ldyBlbGVtZW50Cglsb2FkIDI1NSAvLyBmdWxsIGFycmF5Cglsb2FkIDI1NCAvLyBlbGVtZW50IHN0YXJ0Cglsb2FkIDI1MyAvLyBlbGVtZW50IGxlbmd0aAoJKyAvLyBnZXQgZW5kIG9mIEVsZW1lbnQKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCWxlbgoJc3Vic3RyaW5nMwoJY29uY2F0Cgljb25jYXQKCXN0b3JlIDI1NSAvLyBmdWxsIGFycmF5CgljYWxsc3ViIGdldF9sZW5ndGhfZGlmZmVyZW5jZQoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJZnJhbWVfZGlnIC0zIC8vIGFkZHJlc3M6IGFkZHJlc3MKCWR1cAoJYm94X2RlbAoJcG9wCglzd2FwCglib3hfcHV0CgliIGlmMF9lbmQKCmlmMF9lbHNlOgoJZXJyIC8vICdJbnZhbGlkIGZpZWxkJwoKaWYwX2VuZDoKCXJldHN1YgoKLy8gdmVyaWZ5Q29udGFjdE5hbWUoYWRkcmVzcyxzdHJpbmcpdm9pZAphYmlfcm91dGVfdmVyaWZ5Q29udGFjdE5hbWU6CgkvLyBhZGRyZXNzOiBhZGRyZXNzCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglkdXAKCWxlbgoJaW50IDMyCgk9PQoJYXNzZXJ0CgoJLy8gbmFtZTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIGV4ZWN1dGUgdmVyaWZ5Q29udGFjdE5hbWUoYWRkcmVzcyxzdHJpbmcpdm9pZAoJY2FsbHN1YiB2ZXJpZnlDb250YWN0TmFtZQoJaW50IDEKCXJldHVybgoKdmVyaWZ5Q29udGFjdE5hbWU6Cglwcm90byAyIDAKCgkvLyBleGFtcGxlcy90dXBsZV9pbl9ib3gvYXBwLmFsZ28udHM6MzIKCS8vIGFzc2VydCh0aGlzLmNvbnRhY3RzKGFkZHJlc3MpLnZhbHVlLm5hbWUgPT09IG5hbWUpCglmcmFtZV9kaWcgLTIgLy8gYWRkcmVzczogYWRkcmVzcwoJYm94X2dldAoJYXNzZXJ0CglzdG9yZSAyNTUgLy8gZnVsbCBhcnJheQoJaW50IDAKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXVuY292ZXIgMgoJZXh0cmFjdF91aW50MTYKCWR1cCAvLyBkdXBsaWNhdGUgc3RhcnQgb2YgZWxlbWVudAoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJc3dhcAoJZXh0cmFjdF91aW50MTYgLy8gZ2V0IG51bWJlciBvZiBlbGVtZW50cwoJaW50IDEgLy8gZ2V0IHR5cGUgbGVuZ3RoCgkqIC8vIG11bHRpcGx5IGJ5IHR5cGUgbGVuZ3RoCglpbnQgMgoJKyAvLyBhZGQgdHdvIGZvciBsZW5ndGgKCWV4dHJhY3QzCglleHRyYWN0IDIgMAoJZnJhbWVfZGlnIC0xIC8vIG5hbWU6IHN0cmluZwoJPT0KCWFzc2VydAoJcmV0c3ViCgphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgpjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9Ob09wOgoJbWV0aG9kICJzZXRNeUNvbnRhY3Qoc3RyaW5nLHN0cmluZyl2b2lkIgoJbWV0aG9kICJhZGRDb250YWN0KHN0cmluZyxzdHJpbmcsYWRkcmVzcyl2b2lkIgoJbWV0aG9kICJ1cGRhdGVDb250YWN0RmllbGQoc3RyaW5nLHN0cmluZyxhZGRyZXNzKXZvaWQiCgltZXRob2QgInZlcmlmeUNvbnRhY3ROYW1lKHN0cmluZyxhZGRyZXNzKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfc2V0TXlDb250YWN0IGFiaV9yb3V0ZV9hZGRDb250YWN0IGFiaV9yb3V0ZV91cGRhdGVDb250YWN0RmllbGQgYWJpX3JvdXRlX3ZlcmlmeUNvbnRhY3ROYW1lCgllcnIKCnByb2Nlc3NfZHluYW1pY190dXBsZV9lbGVtZW50OgoJcHJvdG8gNCAzCglmcmFtZV9kaWcgLTQgLy8gdHVwbGUgaGVhZAoJZnJhbWVfZGlnIC0yIC8vIGhlYWQgb2Zmc2V0Cgljb25jYXQKCWZyYW1lX2J1cnkgLTQgLy8gdHVwbGUgaGVhZAoJZnJhbWVfZGlnIC0xIC8vIGVsZW1lbnQKCWR1cAoJbGVuCglmcmFtZV9kaWcgLTIgLy8gaGVhZCBvZmZzZXQKCWJ0b2kKCSsKCWl0b2IKCWV4dHJhY3QgNiAyCglmcmFtZV9idXJ5IC0yIC8vIGhlYWQgb2Zmc2V0CglmcmFtZV9kaWcgLTMgLy8gdHVwbGUgdGFpbAoJc3dhcAoJY29uY2F0CglmcmFtZV9idXJ5IC0zIC8vIHR1cGxlIHRhaWwKCWZyYW1lX2RpZyAtNCAvLyB0dXBsZSBoZWFkCglmcmFtZV9kaWcgLTMgLy8gdHVwbGUgdGFpbAoJZnJhbWVfZGlnIC0yIC8vIGhlYWQgb2Zmc2V0CglyZXRzdWIKCnVwZGF0ZV9keW5hbWljX2hlYWQ6Cglwcm90byAyIDAKCWZyYW1lX2RpZyAtMiAvLyBsZW5ndGggZGlmZmVyZW5jZQoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJZnJhbWVfZGlnIC0xIC8vIGR5bmFtaWMgYXJyYXkgb2Zmc2V0CglleHRyYWN0X3VpbnQxNiAvLyBleHRyYWN0IGR5bmFtaWMgYXJyYXkgb2Zmc2V0Cglsb2FkIDI0OSAvLyBzdWJ0cmFjdCBoZWFkIGRpZmZlcmVuY2UKCWJ6IHN1YnRyYWN0X2hlYWRfZGlmZmVyZW5jZQoJKyAvLyBhZGQgZGlmZmVyZW5jZSB0byBvZmZzZXQKCWIgZW5kX2NhbGNfbmV3X2hlYWQKCnN1YnRyYWN0X2hlYWRfZGlmZmVyZW5jZToKCXN3YXAKCS0gLy8gc3VidHJhY3QgZGlmZmVyZW5jZSBmcm9tIG9mZmV0CgplbmRfY2FsY19uZXdfaGVhZDoKCWl0b2IgLy8gY29udmVydCB0byBieXRlcwoJZXh0cmFjdCA2IDIgLy8gY29udmVydCB0byB1aW50MTYKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWZyYW1lX2RpZyAtMSAvLyBvZmZzZXQKCXN3YXAKCXJlcGxhY2UzIC8vIHVwZGF0ZSBvZmZzZXQKCXN0b3JlIDI1NSAvLyBmdWxsIGFycmF5CglyZXRzdWIKCmdldF9sZW5ndGhfZGlmZmVyZW5jZToKCWxvYWQgMjUyIC8vIG5ldyBlbGVtZW50CglsZW4gLy8gbGVuZ3RoIG9mIG5ldyBlbGVtZW50Cglsb2FkIDI1MyAvLyBlbGVtZW50IGxlbmd0aAoJPAoJYm56IHN3YXBwZWRfZGlmZmVyZW5jZQoJbG9hZCAyNTIgLy8gbmV3IGVsZW1lbnQKCWxlbiAvLyBsZW5ndGggb2YgbmV3IGVsZW1lbnQKCWxvYWQgMjUzIC8vIGVsZW1lbnQgbGVuZ3RoCglpbnQgMQoJc3RvcmUgMjQ5IC8vIHN1YnRyYWN0IGhlYWQgZGlmZmVyZW5jZQoJYiBnZXRfZGlmZmVyZW5jZQoKc3dhcHBlZF9kaWZmZXJlbmNlOgoJbG9hZCAyNTMgLy8gZWxlbWVudCBsZW5ndGgKCWxvYWQgMjUyIC8vIG5ldyBlbGVtZW50CglsZW4gLy8gbGVuZ3RoIG9mIG5ldyBlbGVtZW50CglpbnQgMAoJc3RvcmUgMjQ5IC8vIHN1YnRyYWN0IGhlYWQgZGlmZmVyZW5jZQoKZ2V0X2RpZmZlcmVuY2U6CgktIC8vIGdldCBsZW5ndGggZGlmZmVyZW5jZQoJc3RvcmUgMjUwIC8vIGxlbmd0aCBkaWZmZXJlbmNlCglyZXRzdWI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "ContactsApp",
    "desc": "",
    "methods": [
      {
        "name": "setMyContact",
        "args": [
          {
            "name": "name",
            "type": "string",
            "desc": ""
          },
          {
            "name": "company",
            "type": "string",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "addContact",
        "args": [
          {
            "name": "name",
            "type": "string",
            "desc": ""
          },
          {
            "name": "company",
            "type": "string",
            "desc": ""
          },
          {
            "name": "address",
            "type": "address",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "updateContactField",
        "args": [
          {
            "name": "field",
            "type": "string",
            "desc": ""
          },
          {
            "name": "value",
            "type": "string",
            "desc": ""
          },
          {
            "name": "address",
            "type": "address",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "verifyContactName",
        "args": [
          {
            "name": "name",
            "type": "string",
            "desc": ""
          },
          {
            "name": "address",
            "type": "address",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "createApplication",
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        },
        "args": []
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
 * Defines the types of available calls and state of the ContactsApp smart contract.
 */
export type ContactsApp = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'setMyContact(string,string)void' | 'setMyContact', {
      argsObj: {
        name: string
        company: string
      }
      argsTuple: [name: string, company: string]
      returns: void
    }>
    & Record<'addContact(string,string,address)void' | 'addContact', {
      argsObj: {
        name: string
        company: string
        address: string
      }
      argsTuple: [name: string, company: string, address: string]
      returns: void
    }>
    & Record<'updateContactField(string,string,address)void' | 'updateContactField', {
      argsObj: {
        field: string
        value: string
        address: string
      }
      argsTuple: [field: string, value: string, address: string]
      returns: void
    }>
    & Record<'verifyContactName(string,address)void' | 'verifyContactName', {
      argsObj: {
        name: string
        address: string
      }
      argsTuple: [name: string, address: string]
      returns: void
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'myContact'?: BinaryState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type ContactsAppSig = keyof ContactsApp['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends ContactsAppSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the ContactsApp smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends ContactsAppSig> = ContactsApp['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the ContactsApp smart contract to the method's return type
 */
export type MethodReturn<TSignature extends ContactsAppSig> = ContactsApp['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type ContactsAppCreateCalls = (typeof ContactsAppCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type ContactsAppCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type ContactsAppDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: ContactsAppCreateCalls) => ContactsAppCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class ContactsAppCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the ContactsApp smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the setMyContact(string,string)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setMyContact(args: MethodArgs<'setMyContact(string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'setMyContact(string,string)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.name, args.company],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the addContact(string,string,address)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static addContact(args: MethodArgs<'addContact(string,string,address)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'addContact(string,string,address)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.name, args.company, args.address],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the updateContactField(string,string,address)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static updateContactField(args: MethodArgs<'updateContactField(string,string,address)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'updateContactField(string,string,address)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.field, args.value, args.address],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the verifyContactName(string,address)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static verifyContactName(args: MethodArgs<'verifyContactName(string,address)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'verifyContactName(string,address)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.name, args.address],
      ...params,
    }
  }
}

/**
 * A client to make calls to the ContactsApp smart contract
 */
export class ContactsAppClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `ContactsAppClient`
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
  public async call<TSignature extends keyof ContactsApp['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the ContactsApp smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: ContactsAppDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(ContactsAppCallFactory.create)
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
       * Creates a new instance of the ContactsApp smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(ContactsAppCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the ContactsApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the setMyContact(string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setMyContact(args: MethodArgs<'setMyContact(string,string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ContactsAppCallFactory.setMyContact(args, params))
  }

  /**
   * Calls the addContact(string,string,address)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public addContact(args: MethodArgs<'addContact(string,string,address)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ContactsAppCallFactory.addContact(args, params))
  }

  /**
   * Calls the updateContactField(string,string,address)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public updateContactField(args: MethodArgs<'updateContactField(string,string,address)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ContactsAppCallFactory.updateContactField(args, params))
  }

  /**
   * Calls the verifyContactName(string,address)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public verifyContactName(args: MethodArgs<'verifyContactName(string,address)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ContactsAppCallFactory.verifyContactName(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<ContactsApp['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get myContact() {
        return ContactsAppClient.getBinaryState(state, 'myContact')
      },
    }
  }

  public compose(): ContactsAppComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      setMyContact(args: MethodArgs<'setMyContact(string,string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.setMyContact(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addContact(args: MethodArgs<'addContact(string,string,address)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.addContact(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      updateContactField(args: MethodArgs<'updateContactField(string,string,address)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.updateContactField(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      verifyContactName(args: MethodArgs<'verifyContactName(string,address)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.verifyContactName(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
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
    } as unknown as ContactsAppComposer
  }
}
export type ContactsAppComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the setMyContact(string,string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setMyContact(args: MethodArgs<'setMyContact(string,string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ContactsAppComposer<[...TReturns, MethodReturn<'setMyContact(string,string)void'>]>

  /**
   * Calls the addContact(string,string,address)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  addContact(args: MethodArgs<'addContact(string,string,address)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ContactsAppComposer<[...TReturns, MethodReturn<'addContact(string,string,address)void'>]>

  /**
   * Calls the updateContactField(string,string,address)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  updateContactField(args: MethodArgs<'updateContactField(string,string,address)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ContactsAppComposer<[...TReturns, MethodReturn<'updateContactField(string,string,address)void'>]>

  /**
   * Calls the verifyContactName(string,address)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  verifyContactName(args: MethodArgs<'verifyContactName(string,address)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ContactsAppComposer<[...TReturns, MethodReturn<'verifyContactName(string,address)void'>]>

  /**
   * Makes a clear_state call to an existing instance of the ContactsApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): ContactsAppComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): ContactsAppComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<ContactsAppComposerResults<TReturns>>
}
export type ContactsAppComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
