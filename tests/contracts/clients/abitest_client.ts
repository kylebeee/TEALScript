import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class AbiTest extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: { gRef: { type: bkr.AVMType.bytes, key: "gRef", desc: "", static: false }, gMap: { type: bkr.AVMType.bytes, key: "gMap", desc: "", static: false } }, reserved: {} };
    override acctSchema: bkr.Schema = { declared: { lRef: { type: bkr.AVMType.bytes, key: "lRef", desc: "", static: false }, lMap: { type: bkr.AVMType.bytes, key: "lMap", desc: "", static: false } }, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKCWIgbWFpbgoKYmFyZV9yb3V0ZV9jcmVhdGU6CglieXRlIDB4CglkdXBuIDEKCWNhbGxzdWIgY3JlYXRlCglpbnQgMQoJcmV0dXJuCgpjcmVhdGU6Cglwcm90byAxIDAKCXJldHN1YgoKYmFyZV9yb3V0ZV9vcHRJbjoKCWJ5dGUgMHgKCWR1cG4gMQoJY2FsbHN1YiBvcHRJbgoJaW50IDEKCXJldHVybgoKb3B0SW46Cglwcm90byAxIDAKCXJldHN1YgoKYWJpX3JvdXRlX3N0YXRpY0FycmF5OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBzdGF0aWNBcnJheQoJaW50IDEKCXJldHVybgoKc3RhdGljQXJyYXk6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjMwCgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MzIKCS8vIHJldHVybiBhWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfcmV0dXJuU3RhdGljQXJyYXk6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgljYWxsc3ViIHJldHVyblN0YXRpY0FycmF5CglpbnQgMQoJcmV0dXJuCgpyZXR1cm5TdGF0aWNBcnJheToKCXByb3RvIDIgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MzYKCS8vIGE6IFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4gPSBbMTEsIDIyLCAzM10KCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNjAwMDAwMDAwMDAwMDAwMjEKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czozOAoJLy8gcmV0dXJuIGE7CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9zdGF0aWNBcnJheUFyZzoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDEKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWNhbGxzdWIgc3RhdGljQXJyYXlBcmcKCWludCAxCglyZXR1cm4KCnN0YXRpY0FycmF5QXJnOgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo0MgoJLy8gcmV0dXJuIGFbMV07CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglpbnQgOAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9ub25MaXRlcmFsU3RhdGljQXJyYXlFbGVtZW50czoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDUKCWNhbGxzdWIgbm9uTGl0ZXJhbFN0YXRpY0FycmF5RWxlbWVudHMKCWludCAxCglyZXR1cm4KCm5vbkxpdGVyYWxTdGF0aWNBcnJheUVsZW1lbnRzOgoJcHJvdG8gNSAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo0NgoJLy8gbjEgPSAxMQoJaW50IDExCglmcmFtZV9idXJ5IC0xIC8vIG4xOiB1aW50NjQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjQ3CgkvLyBuMiA9IDIyCglpbnQgMjIKCWZyYW1lX2J1cnkgLTIgLy8gbjI6IHVpbnQ2NAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NDgKCS8vIG4zID0gMzMKCWludCAzMwoJZnJhbWVfYnVyeSAtMyAvLyBuMzogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo0OQoJLy8gYTogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFtuMSwgbjIsIG4zXQoJZnJhbWVfZGlnIC0xIC8vIG4xOiB1aW50NjQKCWl0b2IKCWZyYW1lX2RpZyAtMiAvLyBuMjogdWludDY0CglpdG9iCgljb25jYXQKCWZyYW1lX2RpZyAtMyAvLyBuMzogdWludDY0CglpdG9iCgljb25jYXQKCWZyYW1lX2J1cnkgLTQgLy8gYTogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1MQoJLy8gcmV0dXJuIGFbMV07CglmcmFtZV9kaWcgLTQgLy8gYTogdWludDY0WzNdCglpbnQgOAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV9taXhlZFN0YXRpY0FycmF5RWxlbWVudHM6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiA1CgljYWxsc3ViIG1peGVkU3RhdGljQXJyYXlFbGVtZW50cwoJaW50IDEKCXJldHVybgoKbWl4ZWRTdGF0aWNBcnJheUVsZW1lbnRzOgoJcHJvdG8gNSAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1NQoJLy8gbjEgPSAzCglpbnQgMwoJZnJhbWVfYnVyeSAtMSAvLyBuMTogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1NgoJLy8gbjIgPSA0CglpbnQgNAoJZnJhbWVfYnVyeSAtMiAvLyBuMjogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1NwoJLy8gbjMgPSA1CglpbnQgNQoJZnJhbWVfYnVyeSAtMyAvLyBuMzogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo1OAoJLy8gYTogU3RhdGljQXJyYXk8dWludDY0LCA5PiA9IFswLCAxLCAyLCBuMSwgbjIsIG4zLCA2LCA3LCA4XQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMgoJZnJhbWVfZGlnIC0xIC8vIG4xOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJZnJhbWVfZGlnIC0yIC8vIG4yOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJZnJhbWVfZGlnIC0zIC8vIG4zOiB1aW50NjQKCWl0b2IKCWNvbmNhdAoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDYwMDAwMDAwMDAwMDAwMDA3MDAwMDAwMDAwMDAwMDAwOAoJY29uY2F0CglmcmFtZV9idXJ5IC00IC8vIGE6IHVpbnQ2NFs5XQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NjAKCS8vIHJldHVybiBhWzFdICsgYVs0XSArIGFbN107CglmcmFtZV9kaWcgLTQgLy8gYTogdWludDY0WzldCglpbnQgOAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglmcmFtZV9kaWcgLTQgLy8gYTogdWludDY0WzldCglpbnQgMzIKCWludCA4CglleHRyYWN0MwoJYnRvaQoJKwoJZnJhbWVfZGlnIC00IC8vIGE6IHVpbnQ2NFs5XQoJaW50IDU2CglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCSsKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX25vbkxpdGVyYWxTdGF0aWNBcnJheUFjY2VzczoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDMKCWNhbGxzdWIgbm9uTGl0ZXJhbFN0YXRpY0FycmF5QWNjZXNzCglpbnQgMQoJcmV0dXJuCgpub25MaXRlcmFsU3RhdGljQXJyYXlBY2Nlc3M6Cglwcm90byAzIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjY0CgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NjUKCS8vIG4gPSAyCglpbnQgMgoJZnJhbWVfYnVyeSAtMiAvLyBuOiB1aW50NjQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjY3CgkvLyByZXR1cm4gYVtuXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWZyYW1lX2RpZyAtMiAvLyBuOiB1aW50NjQKCWludCA4CgkqCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3NldFN0YXRpY0FycmF5RWxlbWVudDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgc2V0U3RhdGljQXJyYXlFbGVtZW50CglpbnQgMQoJcmV0dXJuCgpzZXRTdGF0aWNBcnJheUVsZW1lbnQ6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjcxCgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6NzMKCS8vIGFbMV0gPSAyMjIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWludCA4CglpbnQgMjIyCglpdG9iCglyZXBsYWNlMwoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50NjQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjc1CgkvLyByZXR1cm4gYVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWludCA4CglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3N0YXRpY0FycmF5SW5TdG9yYWdlUmVmOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMwoJY2FsbHN1YiBzdGF0aWNBcnJheUluU3RvcmFnZVJlZgoJaW50IDEKCXJldHVybgoKc3RhdGljQXJyYXlJblN0b3JhZ2VSZWY6Cglwcm90byAzIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjc5CgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6ODEKCS8vIHRoaXMuZ1JlZi5wdXQoYSkKCWJ5dGUgImdSZWYiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglhcHBfZ2xvYmFsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6ODIKCS8vIHRoaXMubFJlZi5wdXQodGhpcy50eG4uc2VuZGVyLCBhKQoJdHhuIFNlbmRlcgoJYnl0ZSAibFJlZiIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWFwcF9sb2NhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjgzCgkvLyB0aGlzLmJSZWYucHV0KGEpCglieXRlICJiUmVmIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYm94X3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6ODUKCS8vIHJldDogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsKCWJ5dGUgImdSZWYiCglhcHBfZ2xvYmFsX2dldAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJdHhuIFNlbmRlcgoJYnl0ZSAibFJlZiIKCWFwcF9sb2NhbF9nZXQKCWludCA4CglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJYnl0ZSAiYlJlZiIKCWJveF9nZXQKCWFzc2VydAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJY29uY2F0CglmcmFtZV9idXJ5IC0yIC8vIHJldDogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo5MQoJLy8gcmV0dXJuIHJldDsKCWZyYW1lX2RpZyAtMiAvLyByZXQ6IHVpbnQ2NFszXQoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfdXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VSZWY6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAzCgljYWxsc3ViIHVwZGF0ZVN0YXRpY0FycmF5SW5TdG9yYWdlUmVmCglpbnQgMQoJcmV0dXJuCgp1cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZVJlZjoKCXByb3RvIDMgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6OTUKCS8vIGE6IFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4gPSBbMTEsIDIyLCAzM10KCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNjAwMDAwMDAwMDAwMDAwMjEKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo5NwoJLy8gdGhpcy5nUmVmLnB1dChhKQoJYnl0ZSAiZ1JlZiIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWFwcF9nbG9iYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czo5OAoJLy8gdGhpcy5sUmVmLnB1dCh0aGlzLnR4bi5zZW5kZXIsIGEpCgl0eG4gU2VuZGVyCglieXRlICJsUmVmIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYXBwX2xvY2FsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6OTkKCS8vIHRoaXMuYlJlZi5wdXQoYSkKCWJ5dGUgImJSZWYiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglib3hfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMDEKCS8vIHRoaXMuZ1JlZi5nZXQoKVsxXSA9IDExMQoJYnl0ZSAiZ1JlZiIKCWFwcF9nbG9iYWxfZ2V0CglpbnQgOAoJaW50IDExMQoJaXRvYgoJcmVwbGFjZTMKCWJ5dGUgImdSZWYiCglzd2FwCglhcHBfZ2xvYmFsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTAyCgkvLyB0aGlzLmxSZWYuZ2V0KHRoaXMudHhuLnNlbmRlcilbMV0gPSAyMjIKCXR4biBTZW5kZXIKCWJ5dGUgImxSZWYiCglhcHBfbG9jYWxfZ2V0CglpbnQgOAoJaW50IDIyMgoJaXRvYgoJcmVwbGFjZTMKCXR4biBTZW5kZXIKCWJ5dGUgImxSZWYiCgl1bmNvdmVyIDIKCWFwcF9sb2NhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEwMwoJLy8gdGhpcy5iUmVmLmdldCgpWzFdID0gMzMzCglieXRlICJiUmVmIgoJYm94X2dldAoJYXNzZXJ0CglpbnQgOAoJaW50IDMzMwoJaXRvYgoJcmVwbGFjZTMKCWJ5dGUgImJSZWYiCglzd2FwCglib3hfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMDUKCS8vIHJldDogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsKCWJ5dGUgImdSZWYiCglhcHBfZ2xvYmFsX2dldAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJdHhuIFNlbmRlcgoJYnl0ZSAibFJlZiIKCWFwcF9sb2NhbF9nZXQKCWludCA4CglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJYnl0ZSAiYlJlZiIKCWJveF9nZXQKCWFzc2VydAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJY29uY2F0CglmcmFtZV9idXJ5IC0yIC8vIHJldDogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMTEKCS8vIHJldHVybiByZXQ7CglmcmFtZV9kaWcgLTIgLy8gcmV0OiB1aW50NjRbM10KCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3N0YXRpY0FycmF5SW5TdG9yYWdlTWFwOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMwoJY2FsbHN1YiBzdGF0aWNBcnJheUluU3RvcmFnZU1hcAoJaW50IDEKCXJldHVybgoKc3RhdGljQXJyYXlJblN0b3JhZ2VNYXA6Cglwcm90byAzIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjExNQoJLy8gYTogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsxMSwgMjIsIDMzXQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDAwMDAwMDAwMDAwMDE2MDAwMDAwMDAwMDAwMDAyMQoJZnJhbWVfYnVyeSAtMSAvLyBhOiB1aW50NjRbM10KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjExNwoJLy8gdGhpcy5nTWFwLnB1dCgnZ01hcCcsIGEpCglieXRlICJnTWFwIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYXBwX2dsb2JhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjExOAoJLy8gdGhpcy5sTWFwLnB1dCh0aGlzLnR4bi5zZW5kZXIsICdsTWFwJywgYSkKCXR4biBTZW5kZXIKCWJ5dGUgImxNYXAiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglhcHBfbG9jYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMTkKCS8vIHRoaXMuYk1hcC5wdXQoJ2JNYXAnLCBhKQoJYnl0ZSAiYk1hcCIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWJveF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEyMQoJLy8gcmV0OiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWwoJYnl0ZSAiZ01hcCIKCWFwcF9nbG9iYWxfZ2V0CglpbnQgOAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglpdG9iCgl0eG4gU2VuZGVyCglieXRlICJsTWFwIgoJYXBwX2xvY2FsX2dldAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJY29uY2F0CglieXRlICJiTWFwIgoJYm94X2dldAoJYXNzZXJ0CglpbnQgOAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglpdG9iCgljb25jYXQKCWZyYW1lX2J1cnkgLTIgLy8gcmV0OiB1aW50NjRbM10KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEyNwoJLy8gcmV0dXJuIHJldDsKCWZyYW1lX2RpZyAtMiAvLyByZXQ6IHVpbnQ2NFszXQoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfdXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VNYXA6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAzCgljYWxsc3ViIHVwZGF0ZVN0YXRpY0FycmF5SW5TdG9yYWdlTWFwCglpbnQgMQoJcmV0dXJuCgp1cGRhdGVTdGF0aWNBcnJheUluU3RvcmFnZU1hcDoKCXByb3RvIDMgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTMxCgkvLyBhOiBTdGF0aWNBcnJheTx1aW50NjQsIDM+ID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMDAwMDAwMDAwMDAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFszXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTMzCgkvLyB0aGlzLmdNYXAucHV0KCdnTWFwJywgYSkKCWJ5dGUgImdNYXAiCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0WzNdCglhcHBfZ2xvYmFsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTM0CgkvLyB0aGlzLmxNYXAucHV0KHRoaXMudHhuLnNlbmRlciwgJ2xNYXAnLCBhKQoJdHhuIFNlbmRlcgoJYnl0ZSAibE1hcCIKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM10KCWFwcF9sb2NhbF9wdXQKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjEzNQoJLy8gdGhpcy5iTWFwLnB1dCgnYk1hcCcsIGEpCglieXRlICJiTWFwIgoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXQoJYm94X3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTM3CgkvLyB0aGlzLmdNYXAuZ2V0KCdnTWFwJylbMV0gPSAxMTExCglieXRlICJnTWFwIgoJYXBwX2dsb2JhbF9nZXQKCWludCA4CglpbnQgMTExMQoJaXRvYgoJcmVwbGFjZTMKCWJ5dGUgImdNYXAiCglzd2FwCglhcHBfZ2xvYmFsX3B1dAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTM4CgkvLyB0aGlzLmxNYXAuZ2V0KHRoaXMudHhuLnNlbmRlciwgJ2xNYXAnKVsxXSA9IDIyMjIKCXR4biBTZW5kZXIKCWJ5dGUgImxNYXAiCglhcHBfbG9jYWxfZ2V0CglpbnQgOAoJaW50IDIyMjIKCWl0b2IKCXJlcGxhY2UzCgl0eG4gU2VuZGVyCglieXRlICJsTWFwIgoJdW5jb3ZlciAyCglhcHBfbG9jYWxfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxMzkKCS8vIHRoaXMuYk1hcC5nZXQoJ2JNYXAnKVsxXSA9IDMzMzMKCWJ5dGUgImJNYXAiCglib3hfZ2V0Cglhc3NlcnQKCWludCA4CglpbnQgMzMzMwoJaXRvYgoJcmVwbGFjZTMKCWJ5dGUgImJNYXAiCglzd2FwCglib3hfcHV0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNDEKCS8vIHJldDogU3RhdGljQXJyYXk8dWludDY0LCAzPiA9IFsKCWJ5dGUgImdNYXAiCglhcHBfZ2xvYmFsX2dldAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJdHhuIFNlbmRlcgoJYnl0ZSAibE1hcCIKCWFwcF9sb2NhbF9nZXQKCWludCA4CglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWNvbmNhdAoJYnl0ZSAiYk1hcCIKCWJveF9nZXQKCWFzc2VydAoJaW50IDgKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJY29uY2F0CglmcmFtZV9idXJ5IC0yIC8vIHJldDogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNDcKCS8vIHJldHVybiByZXQ7CglmcmFtZV9kaWcgLTIgLy8gcmV0OiB1aW50NjRbM10KCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX25lc3RlZFN0YXRpY0FycmF5OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBuZXN0ZWRTdGF0aWNBcnJheQoJaW50IDEKCXJldHVybgoKbmVzdGVkU3RhdGljQXJyYXk6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE1MQoJLy8gYTogU3RhdGljQXJyYXk8U3RhdGljQXJyYXk8dWludDY0LCAzPiwgMz4gPSBbWzExLCAyMiwgMzNdLCBbNDQsIDU1LCA2Nl0sIFs3NywgODgsIDk5XV0KCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNjAwMDAwMDAwMDAwMDAwMjEwMDAwMDAwMDAwMDAwMDJjMDAwMDAwMDAwMDAwMDAzNzAwMDAwMDAwMDAwMDAwNDIwMDAwMDAwMDAwMDAwMDRkMDAwMDAwMDAwMDAwMDA1ODAwMDAwMDAwMDAwMDAwNjMKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdWzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNTMKCS8vIHJldHVybiBhWzFdWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXVszXQoJaW50IDMyCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3VwZGF0ZU5lc3RlZFN0YXRpY0FycmF5RWxlbWVudDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgdXBkYXRlTmVzdGVkU3RhdGljQXJyYXlFbGVtZW50CglpbnQgMQoJcmV0dXJuCgp1cGRhdGVOZXN0ZWRTdGF0aWNBcnJheUVsZW1lbnQ6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE1NwoJLy8gYTogU3RhdGljQXJyYXk8U3RhdGljQXJyYXk8dWludDY0LCAzPiwgMz4gPSBbWzExLCAyMiwgMzNdLCBbNDQsIDU1LCA2Nl0sIFs3NywgODgsIDk5XV0KCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNjAwMDAwMDAwMDAwMDAwMjEwMDAwMDAwMDAwMDAwMDJjMDAwMDAwMDAwMDAwMDAzNzAwMDAwMDAwMDAwMDAwNDIwMDAwMDAwMDAwMDAwMDRkMDAwMDAwMDAwMDAwMDA1ODAwMDAwMDAwMDAwMDAwNjMKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdWzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNTkKCS8vIGFbMV1bMV0gPSA1NTUKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM11bM10KCWludCAzMgoJaW50IDU1NQoJaXRvYgoJcmVwbGFjZTMKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0CgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNjEKCS8vIHJldHVybiBhWzFdWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXVszXQoJaW50IDMyCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3VwZGF0ZU5lc3RlZFN0YXRpY0FycmF5OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiB1cGRhdGVOZXN0ZWRTdGF0aWNBcnJheQoJaW50IDEKCXJldHVybgoKdXBkYXRlTmVzdGVkU3RhdGljQXJyYXk6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE2NQoJLy8gYTogU3RhdGljQXJyYXk8U3RhdGljQXJyYXk8dWludDY0LCAzPiwgMz4gPSBbWzExLCAyMiwgMzNdLCBbNDQsIDU1LCA2Nl0sIFs3NywgODgsIDk5XV0KCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDBiMDAwMDAwMDAwMDAwMDAxNjAwMDAwMDAwMDAwMDAwMjEwMDAwMDAwMDAwMDAwMDJjMDAwMDAwMDAwMDAwMDAzNzAwMDAwMDAwMDAwMDAwNDIwMDAwMDAwMDAwMDAwMDRkMDAwMDAwMDAwMDAwMDA1ODAwMDAwMDAwMDAwMDAwNjMKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdWzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNjcKCS8vIGFbMV0gPSBbNDQ0LCA1NTUsIDY2Nl0KCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjRbM11bM10KCWludCAyNAoJYnl0ZSAweDAwMDAwMDAwMDAwMDAxYmMwMDAwMDAwMDAwMDAwMjJiMDAwMDAwMDAwMDAwMDI5YQoJcmVwbGFjZTMKCWZyYW1lX2J1cnkgLTEgLy8gYTogdWludDY0WzNdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxNjkKCS8vIHJldHVybiBhWzFdWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NFszXVszXQoJaW50IDMyCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3RocmVlRGltZW5zaW9uYWxVaW50MTZBcnJheToKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDIKCWNhbGxzdWIgdGhyZWVEaW1lbnNpb25hbFVpbnQxNkFycmF5CglpbnQgMQoJcmV0dXJuCgp0aHJlZURpbWVuc2lvbmFsVWludDE2QXJyYXk6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE3MwoJLy8gYTogU3RhdGljQXJyYXk8U3RhdGljQXJyYXk8U3RhdGljQXJyYXk8dWludDE2LCAyPiwgMj4sIDI+ID0gWwoJYnl0ZSAweDAwMGIwMDE2MDAyMTAwMmMwMDM3MDA0MjAwNGQwMDU4CglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQxNlsyXVsyXVsyXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTc3CgkvLyBhWzFdWzFdID0gWzc3NywgODg4XQoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQxNlsyXVsyXVsyXQoJaW50IDEyCglieXRlIDB4MDMwOTAzNzgKCXJlcGxhY2UzCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQxNlsyXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTc5CgkvLyByZXR1cm4gYVsxXVsxXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50MTZbMl1bMl1bMl0KCWludCAxNAoJaW50IDIKCWV4dHJhY3QzCglieXRlIDB4RkZGRgoJYiYKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3NpbXBsZVR1cGxlOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBzaW1wbGVUdXBsZQoJaW50IDEKCXJldHVybgoKc2ltcGxlVHVwbGU6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE4MwoJLy8gYTogW3VpbnQ2NCwgdWludDE2LCB1aW50NjQsIHVpbnQxNl0gPSBbMTEsIDIyLCAzMywgNDRdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMTYwMDAwMDAwMDAwMDAwMDIxMDAyYwoJZnJhbWVfYnVyeSAtMSAvLyBhOiBbdWludDY0LHVpbnQxNix1aW50NjQsdWludDE2XQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTg1CgkvLyByZXR1cm4gYVszXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDY0LHVpbnQxNix1aW50NjQsdWludDE2XQoJaW50IDE4CglpbnQgMgoJZXh0cmFjdDMKCWJ5dGUgMHhGRkZGCgliJgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfYXJyYXlJblR1cGxlOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBhcnJheUluVHVwbGUKCWludCAxCglyZXR1cm4KCmFycmF5SW5UdXBsZToKCXByb3RvIDIgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MTg5CgkvLyBhOiBbdWludDY0LCB1aW50MTYsIFN0YXRpY0FycmF5PHVpbnQ2NCwgMj4sIHVpbnQxNl0gPSBbCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMTYwMDAwMDAwMDAwMDAwMDIxMDAwMDAwMDAwMDAwMDAyYzAwMzcKCWZyYW1lX2J1cnkgLTEgLy8gYTogW3VpbnQ2NCx1aW50MTYsdWludDY0WzJdLHVpbnQxNl0KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjE5MwoJLy8gcmV0dXJuIGFbMl1bMV07CglmcmFtZV9kaWcgLTEgLy8gYTogW3VpbnQ2NCx1aW50MTYsdWludDY0WzJdLHVpbnQxNl0KCWludCAxOAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmFiaV9yb3V0ZV90dXBsZUluQXJyYXk6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgljYWxsc3ViIHR1cGxlSW5BcnJheQoJaW50IDEKCXJldHVybgoKdHVwbGVJbkFycmF5OgoJcHJvdG8gMiAwCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoxOTcKCS8vIGE6IFN0YXRpY0FycmF5PFt1aW50NjQsIHVpbnQxNl0sIDI+ID0gWwoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMGIwMDE2MDAwMDAwMDAwMDAwMDAyMTAwMmMKCWZyYW1lX2J1cnkgLTEgLy8gYTogW3VpbnQ2NCx1aW50MTZdWzJdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoyMDEKCS8vIHJldHVybiBhWzFdWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IFt1aW50NjQsdWludDE2XVsyXQoJaW50IDE4CglpbnQgMgoJZXh0cmFjdDMKCWJ5dGUgMHhGRkZGCgliJgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfdHVwbGVJblR1cGxlOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiB0dXBsZUluVHVwbGUKCWludCAxCglyZXR1cm4KCnR1cGxlSW5UdXBsZToKCXByb3RvIDIgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MjA1CgkvLyBhOiBbdWludDE2LCB1aW50MTYsIFt1aW50NjQsIHVpbnQxNl0sIFt1aW50MTYsIHVpbnQ2NF1dID0gWwoJYnl0ZSAweDAwMGIwMDE2MDAwMDAwMDAwMDAwMDAyMTAwMmMwMDM3MDAwMDAwMDAwMDAwMDA0MgoJZnJhbWVfYnVyeSAtMSAvLyBhOiBbdWludDE2LHVpbnQxNixbdWludDY0LHVpbnQxNl0sW3VpbnQxNix1aW50NjRdXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MjA5CgkvLyByZXR1cm4gYVszXVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDE2LHVpbnQxNixbdWludDY0LHVpbnQxNl0sW3VpbnQxNix1aW50NjRdXQoJaW50IDE2CglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3Nob3J0VHlwZU5vdGF0aW9uOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiBzaG9ydFR5cGVOb3RhdGlvbgoJaW50IDEKCXJldHVybgoKc2hvcnRUeXBlTm90YXRpb246Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjIxMwoJLy8gYTogW3VpbnQxNjwyPiwgdWludDY0PDI+LCB1aW50MTY8Mj5dID0gWwoJYnl0ZSAweDAwMGIwMDE2MDAwMDAwMDAwMDAwMDAyMTAwMDAwMDAwMDAwMDAwMmMwMDM3MDA0MgoJZnJhbWVfYnVyeSAtMSAvLyBhOiBbdWludDE2WzJdLHVpbnQ2NFsyXSx1aW50MTZbMl1dCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoyMTcKCS8vIHJldHVybiBhWzJdWzFdOwoJZnJhbWVfZGlnIC0xIC8vIGE6IFt1aW50MTZbMl0sdWludDY0WzJdLHVpbnQxNlsyXV0KCWludCAyMgoJaW50IDIKCWV4dHJhY3QzCglieXRlIDB4RkZGRgoJYiYKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX2Rpc2d1c3Rpbmc6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgljYWxsc3ViIGRpc2d1c3RpbmcKCWludCAxCglyZXR1cm4KCmRpc2d1c3Rpbmc6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjIyMQoJLy8gYTogU3RhdGljQXJyYXk8W3VpbnQxNjwyPiwgdWludDY0LCBbdWludDE2LCB1aW50NjRdLCBTdGF0aWNBcnJheTx1aW50NjQ8Mj4sIDI+XSwgMj4gPSBbCglieXRlIDB4MDAwYjAwMTYwMDAwMDAwMDAwMDAwMDIxMDAyYzAwMDAwMDAwMDAwMDAwMzcwMDAwMDAwMDAwMDAwMDQyMDAwMDAwMDAwMDAwMDA0ZDAwMDAwMDAwMDAwMDAwNTgwMDAwMDAwMDAwMDAwMDYzMDA2ZjAwZGUwMDAwMDAwMDAwMDAwMTRkMDFiYzAwMDAwMDAwMDAwMDAyMmIwMDAwMDAwMDAwMDAwMjlhMDAwMDAwMDAwMDAwMDMwOTAwMDAwMDAwMDAwMDAzNzgwMDAwMDAwMDAwMDAwM2U3CglmcmFtZV9idXJ5IC0xIC8vIGE6IFt1aW50MTZbMl0sdWludDY0LFt1aW50MTYsdWludDY0XSx1aW50NjRbMl1bMl1dWzJdCgoJLy8gdGVzdHMvY29udHJhY3RzL2FiaS50czoyMjYKCS8vIGFbMV1bM11bMV0gPSBbODg4OCwgOTk5OV0KCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDE2WzJdLHVpbnQ2NCxbdWludDE2LHVpbnQ2NF0sdWludDY0WzJdWzJdXVsyXQoJaW50IDkyCglieXRlIDB4MDAwMDAwMDAwMDAwMjJiODAwMDAwMDAwMDAwMDI3MGYKCXJlcGxhY2UzCglmcmFtZV9idXJ5IC0xIC8vIGE6IHVpbnQ2NFsyXQoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MjI3CgkvLyByZXR1cm4gYVsxXVszXVsxXVswXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDE2WzJdLHVpbnQ2NCxbdWludDE2LHVpbnQ2NF0sdWludDY0WzJdWzJdXVsyXQoJaW50IDkyCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKYWJpX3JvdXRlX3JldHVyblR1cGxlOgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJY2FsbHN1YiByZXR1cm5UdXBsZQoJaW50IDEKCXJldHVybgoKcmV0dXJuVHVwbGU6Cglwcm90byAyIDAKCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjIzMQoJLy8gYTogW3VpbnQ2NCwgdWludDE2LCB1aW50NjRdID0gWzExLCAyMiwgMzNdCglieXRlIDB4MDAwMDAwMDAwMDAwMDAwYjAwMTYwMDAwMDAwMDAwMDAwMDIxCglmcmFtZV9idXJ5IC0xIC8vIGE6IFt1aW50NjQsdWludDE2LHVpbnQ2NF0KCgkvLyB0ZXN0cy9jb250cmFjdHMvYWJpLnRzOjIzMgoJLy8gcmV0dXJuIGE7CglmcmFtZV9kaWcgLTEgLy8gYTogW3VpbnQ2NCx1aW50MTYsdWludDY0XQoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfdHVwbGVBcmc6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAxCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCgljYWxsc3ViIHR1cGxlQXJnCglpbnQgMQoJcmV0dXJuCgp0dXBsZUFyZzoKCXByb3RvIDIgMAoKCS8vIHRlc3RzL2NvbnRyYWN0cy9hYmkudHM6MjM2CgkvLyByZXR1cm4gYVsxXTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBbdWludDY0LHVpbnQxNix1aW50NjRdCglpbnQgOAoJaW50IDIKCWV4dHJhY3QzCglieXRlIDB4RkZGRgoJYiYKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKbWFpbjoKCXR4biBOdW1BcHBBcmdzCglibnogcm91dGVfYWJpCgl0eG4gQXBwbGljYXRpb25JRAoJaW50IDAKCT09CglpbnQgT3B0SW4KCXR4biBPbkNvbXBsZXRpb24KCT09Cgl0eG4gQXBwbGljYXRpb25JRAoJaW50IDAKCSE9CgkmJgoJaW50IDEKCW1hdGNoIGJhcmVfcm91dGVfY3JlYXRlIGJhcmVfcm91dGVfb3B0SW4KCnJvdXRlX2FiaToKCW1ldGhvZCAic3RhdGljQXJyYXkoKXVpbnQ2NCIKCW1ldGhvZCAicmV0dXJuU3RhdGljQXJyYXkoKXVpbnQ2NFszXSIKCW1ldGhvZCAic3RhdGljQXJyYXlBcmcodWludDY0WzNdKXVpbnQ2NCIKCW1ldGhvZCAibm9uTGl0ZXJhbFN0YXRpY0FycmF5RWxlbWVudHMoKXVpbnQ2NCIKCW1ldGhvZCAibWl4ZWRTdGF0aWNBcnJheUVsZW1lbnRzKCl1aW50NjQiCgltZXRob2QgIm5vbkxpdGVyYWxTdGF0aWNBcnJheUFjY2VzcygpdWludDY0IgoJbWV0aG9kICJzZXRTdGF0aWNBcnJheUVsZW1lbnQoKXVpbnQ2NCIKCW1ldGhvZCAic3RhdGljQXJyYXlJblN0b3JhZ2VSZWYoKXVpbnQ2NFszXSIKCW1ldGhvZCAidXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VSZWYoKXVpbnQ2NFszXSIKCW1ldGhvZCAic3RhdGljQXJyYXlJblN0b3JhZ2VNYXAoKXVpbnQ2NFszXSIKCW1ldGhvZCAidXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VNYXAoKXVpbnQ2NFszXSIKCW1ldGhvZCAibmVzdGVkU3RhdGljQXJyYXkoKXVpbnQ2NCIKCW1ldGhvZCAidXBkYXRlTmVzdGVkU3RhdGljQXJyYXlFbGVtZW50KCl1aW50NjQiCgltZXRob2QgInVwZGF0ZU5lc3RlZFN0YXRpY0FycmF5KCl1aW50NjQiCgltZXRob2QgInRocmVlRGltZW5zaW9uYWxVaW50MTZBcnJheSgpdWludDE2IgoJbWV0aG9kICJzaW1wbGVUdXBsZSgpdWludDE2IgoJbWV0aG9kICJhcnJheUluVHVwbGUoKXVpbnQ2NCIKCW1ldGhvZCAidHVwbGVJbkFycmF5KCl1aW50MTYiCgltZXRob2QgInR1cGxlSW5UdXBsZSgpdWludDY0IgoJbWV0aG9kICJzaG9ydFR5cGVOb3RhdGlvbigpdWludDE2IgoJbWV0aG9kICJkaXNndXN0aW5nKCl1aW50NjQiCgltZXRob2QgInJldHVyblR1cGxlKCkodWludDY0LHVpbnQxNix1aW50NjQpIgoJbWV0aG9kICJ0dXBsZUFyZygodWludDY0LHVpbnQxNix1aW50NjQpKXVpbnQxNiIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoIGFiaV9yb3V0ZV9zdGF0aWNBcnJheSBhYmlfcm91dGVfcmV0dXJuU3RhdGljQXJyYXkgYWJpX3JvdXRlX3N0YXRpY0FycmF5QXJnIGFiaV9yb3V0ZV9ub25MaXRlcmFsU3RhdGljQXJyYXlFbGVtZW50cyBhYmlfcm91dGVfbWl4ZWRTdGF0aWNBcnJheUVsZW1lbnRzIGFiaV9yb3V0ZV9ub25MaXRlcmFsU3RhdGljQXJyYXlBY2Nlc3MgYWJpX3JvdXRlX3NldFN0YXRpY0FycmF5RWxlbWVudCBhYmlfcm91dGVfc3RhdGljQXJyYXlJblN0b3JhZ2VSZWYgYWJpX3JvdXRlX3VwZGF0ZVN0YXRpY0FycmF5SW5TdG9yYWdlUmVmIGFiaV9yb3V0ZV9zdGF0aWNBcnJheUluU3RvcmFnZU1hcCBhYmlfcm91dGVfdXBkYXRlU3RhdGljQXJyYXlJblN0b3JhZ2VNYXAgYWJpX3JvdXRlX25lc3RlZFN0YXRpY0FycmF5IGFiaV9yb3V0ZV91cGRhdGVOZXN0ZWRTdGF0aWNBcnJheUVsZW1lbnQgYWJpX3JvdXRlX3VwZGF0ZU5lc3RlZFN0YXRpY0FycmF5IGFiaV9yb3V0ZV90aHJlZURpbWVuc2lvbmFsVWludDE2QXJyYXkgYWJpX3JvdXRlX3NpbXBsZVR1cGxlIGFiaV9yb3V0ZV9hcnJheUluVHVwbGUgYWJpX3JvdXRlX3R1cGxlSW5BcnJheSBhYmlfcm91dGVfdHVwbGVJblR1cGxlIGFiaV9yb3V0ZV9zaG9ydFR5cGVOb3RhdGlvbiBhYmlfcm91dGVfZGlzZ3VzdGluZyBhYmlfcm91dGVfcmV0dXJuVHVwbGUgYWJpX3JvdXRlX3R1cGxlQXJn";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50IDEKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "staticArray", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "returnStaticArray", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "staticArrayArg", desc: "", args: [{ type: "uint64[3]", name: "a", desc: "" }], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "nonLiteralStaticArrayElements", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "mixedStaticArrayElements", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "nonLiteralStaticArrayAccess", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "setStaticArrayElement", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "staticArrayInStorageRef", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateStaticArrayInStorageRef", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "staticArrayInStorageMap", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateStaticArrayInStorageMap", desc: "", args: [], returns: { type: "uint64[3]", desc: "" } }),
        new algosdk.ABIMethod({ name: "nestedStaticArray", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateNestedStaticArrayElement", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "updateNestedStaticArray", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "threeDimensionalUint16Array", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "simpleTuple", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "arrayInTuple", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "tupleInArray", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "tupleInTuple", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "shortTypeNotation", desc: "", args: [], returns: { type: "uint16", desc: "" } }),
        new algosdk.ABIMethod({ name: "disgusting", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "returnTuple", desc: "", args: [], returns: { type: "(uint64,uint16,uint64)", desc: "" } }),
        new algosdk.ABIMethod({ name: "tupleArg", desc: "", args: [{ type: "(uint64,uint16,uint64)", name: "a", desc: "" }], returns: { type: "uint16", desc: "" } })
    ];
    async staticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.staticArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async returnStaticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.returnStaticArray(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async staticArrayArg(args: {
        a: bigint[];
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.staticArrayArg({ a: args.a }, txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async nonLiteralStaticArrayElements(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.nonLiteralStaticArrayElements(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async mixedStaticArrayElements(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.mixedStaticArrayElements(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async nonLiteralStaticArrayAccess(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.nonLiteralStaticArrayAccess(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async setStaticArrayElement(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.setStaticArrayElement(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async staticArrayInStorageRef(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.staticArrayInStorageRef(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async updateStaticArrayInStorageRef(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.updateStaticArrayInStorageRef(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async staticArrayInStorageMap(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.staticArrayInStorageMap(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async updateStaticArrayInStorageMap(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint[]>> {
        const result = await this.execute(await this.compose.updateStaticArrayInStorageMap(txnParams));
        return new bkr.ABIResult<bigint[]>(result, result.returnValue as bigint[]);
    }
    async nestedStaticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.nestedStaticArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async updateNestedStaticArrayElement(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.updateNestedStaticArrayElement(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async updateNestedStaticArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.updateNestedStaticArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async threeDimensionalUint16Array(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.threeDimensionalUint16Array(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async simpleTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.simpleTuple(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async arrayInTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.arrayInTuple(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async tupleInArray(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.tupleInArray(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async tupleInTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.tupleInTuple(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async shortTypeNotation(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.shortTypeNotation(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async disgusting(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.disgusting(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async returnTuple(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<[
        bigint,
        bigint,
        bigint
    ]>> {
        const result = await this.execute(await this.compose.returnTuple(txnParams));
        return new bkr.ABIResult<[
            bigint,
            bigint,
            bigint
        ]>(result, result.returnValue as [
            bigint,
            bigint,
            bigint
        ]);
    }
    async tupleArg(args: {
        a: [
            bigint,
            bigint,
            bigint
        ];
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.tupleArg({ a: args.a }, txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    compose = {
        staticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArray"), {}, txnParams, atc);
        },
        returnStaticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "returnStaticArray"), {}, txnParams, atc);
        },
        staticArrayArg: async (args: {
            a: bigint[];
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArrayArg"), { a: args.a }, txnParams, atc);
        },
        nonLiteralStaticArrayElements: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "nonLiteralStaticArrayElements"), {}, txnParams, atc);
        },
        mixedStaticArrayElements: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "mixedStaticArrayElements"), {}, txnParams, atc);
        },
        nonLiteralStaticArrayAccess: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "nonLiteralStaticArrayAccess"), {}, txnParams, atc);
        },
        setStaticArrayElement: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "setStaticArrayElement"), {}, txnParams, atc);
        },
        staticArrayInStorageRef: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArrayInStorageRef"), {}, txnParams, atc);
        },
        updateStaticArrayInStorageRef: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateStaticArrayInStorageRef"), {}, txnParams, atc);
        },
        staticArrayInStorageMap: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "staticArrayInStorageMap"), {}, txnParams, atc);
        },
        updateStaticArrayInStorageMap: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateStaticArrayInStorageMap"), {}, txnParams, atc);
        },
        nestedStaticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "nestedStaticArray"), {}, txnParams, atc);
        },
        updateNestedStaticArrayElement: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateNestedStaticArrayElement"), {}, txnParams, atc);
        },
        updateNestedStaticArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "updateNestedStaticArray"), {}, txnParams, atc);
        },
        threeDimensionalUint16Array: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "threeDimensionalUint16Array"), {}, txnParams, atc);
        },
        simpleTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "simpleTuple"), {}, txnParams, atc);
        },
        arrayInTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "arrayInTuple"), {}, txnParams, atc);
        },
        tupleInArray: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "tupleInArray"), {}, txnParams, atc);
        },
        tupleInTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "tupleInTuple"), {}, txnParams, atc);
        },
        shortTypeNotation: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "shortTypeNotation"), {}, txnParams, atc);
        },
        disgusting: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "disgusting"), {}, txnParams, atc);
        },
        returnTuple: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "returnTuple"), {}, txnParams, atc);
        },
        tupleArg: async (args: {
            a: [
                bigint,
                bigint,
                bigint
            ];
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "tupleArg"), { a: args.a }, txnParams, atc);
        }
    };
}
