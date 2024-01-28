import { Contract } from '../../src/lib/index';

// eslint-disable-next-line no-unused-vars
class MathTest extends Contract {
  gKey = GlobalStateKey<uint64>();

  u64plus(a: uint64, b: uint64): uint64 {
    return a + b;
  }

  u64minus(a: uint64, b: uint64): uint64 {
    return a - b;
  }

  u64mul(a: uint64, b: uint64): uint64 {
    return a * b;
  }

  u64div(a: uint64, b: uint64): uint64 {
    return a / b;
  }

  u256plus(a: uint256, b: uint256): uint256 {
    return <uint256>(a + b);
  }

  u256minus(a: uint256, b: uint256): uint256 {
    return <uint256>(a - b);
  }

  u256mul(a: uint256, b: uint256): uint256 {
    return <uint256>(a * b);
  }

  u256div(a: uint256, b: uint256): uint256 {
    return <uint256>(a / b);
  }

  u64Return256(a: uint64, b: uint64): uint256 {
    return <uint256>(a + b);
  }

  maxU64(): uint64 {
    // eslint-disable-next-line no-loss-of-precision
    return 18_446_744_073_709_551_615;
  }

  exponent(a: uint64, b: uint64): uint64 {
    return a ** b;
  }

  variableTypeHint(x: uint<8>, y: uint<8>): uint16 {
    const z = <uint16>(x + y);

    return z;
  }

  uint8plus(a: uint<8>, b: uint<8>): uint<8> {
    return a + b;
  }

  uint8exp(a: uint<8>, b: uint<8>): uint<8> {
    return a ** b;
  }

  plusEquals(a: number, b: number): number {
    let x = a;

    x += b;

    return x;
  }

  plusEqualsFromGlobal(a: number, b: number): number {
    this.gKey.value = a;

    this.gKey.value += b;

    return this.gKey.value;
  }

  ufixedLiteralMul(): ufixed<64, 2> {
    const a: ufixed<64, 2> = 12.34;
    const b: ufixed<64, 2> = 12.34;
    const c = a * b;

    return c;
  }

  ufixedMul(a: ufixed<64, 2>, b: ufixed<64, 2>): ufixed<64, 2> {
    return a * b;
  }

  BigUfixedMul(a: ufixed<128, 2>, b: ufixed<128, 2>): ufixed<128, 2> {
    return a * b;
  }

  TripleBigUfixedMul(a: ufixed<128, 2>, b: ufixed<128, 2>, c: ufixed<128, 2>): ufixed<128, 2> {
    const ab = a * b;
    const abc = ab * c;
    return abc;
  }

  boxKey = BoxKey<uint256>();

  boxTest(): uint256 {
    this.boxKey.value = <uint256>1;
    this.boxKey.value += 1;

    return this.boxKey.value;
  }

  private foo(x: uint256): uint256 {
    return x;
  }

  unsafeMethodArgs(a: uint256, b: uint256): uint256 {
    const c = a + b;

    return this.foo(c);
  }

  uint256ComparisonType(a: uint256, b: uint256): void {
    const senderBalanceAfter = a - b;
    if (senderBalanceAfter > <uint256>0) {
      log('nonZero');
    } else {
      log('zero');
    }
  }

  squareRoot256(a: uint256, b: uint256): uint256 {
    return sqrt(a * b);
  }

  squareRoot64(a: uint64, b: uint64): uint64 {
    return sqrt(a * b);
  }

  addressToBigInt(addr: Address): boolean {
    return btobigint(addr) > btobigint(this.txn.sender);
  }

  u8Tou64(): uint64 {
    const x: uint8 = 7;
    return <uint64>x;
  }

  private privateFuncName(x: uint8, y: uint64): void {
    assert(<uint8>y > x);
  }

  funcName(x: uint256): void {
    this.privateFuncName(<uint8>x, 1337);
  }

  bigintPlus(a: uint64, b: uint64): uint64 {
    const x = itob(a);
    const y = itob(b);
    return (btobigint(x) + btobigint(y)) as uint64;
  }

  bitwiseOr(a: uint64, b: uint64): uint64 {
    return a | b;
  }

  bitwiseAnd(a: uint64, b: uint64): uint64 {
    return a & b;
  }

  bitwiseXor(a: uint64, b: uint64): uint64 {
    return a ^ b;
  }

  bitwiseOrU256(a: uint256, b: uint256): uint256 {
    return a | b;
  }

  bitwiseAndU256(a: uint256, b: uint256): uint256 {
    return a & b;
  }

  bitwiseXorU256(a: uint256, b: uint256): uint256 {
    return a ^ b;
  }

  bitwiseNot(a: uint64): uint64 {
    return ~a;
  }

  bitwiseNotU256(a: uint256): uint256 {
    return ~a;
  }

  mulw(a: uint64, b: uint64): uint64 {
    const p = mulw(a, b);

    const p2 = p;

    return p2.low;
  }

  addw(a: uint64, b: uint64): uint64 {
    const p = addw(a, b);

    const p2 = p;

    return p2.low;
  }

  expw(a: uint64, b: uint64): uint64 {
    const p = expw(a, b);

    const p2 = p;

    return p2.low;
  }

  divw(a: uint64, b: uint64): uint64 {
    return divw(0, a, b);
  }

  divmodw(a: uint64, b: uint64): uint64 {
    const p = divmodw(0, a, 0, b);

    const p2 = p;

    return p2.quotientLow;
  }
}
