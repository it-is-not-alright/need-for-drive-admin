import { CheckerSet } from './types';

const checkerSet: CheckerSet = {
  minLen: (value: string, target: number) => value.length >= target,
  pattern: (value: string, target: RegExp) => target.test(value),
};

export { checkerSet };
