import assert from 'assert';
export { keyPair } from './keyPair.js';
export { ProxyEmp } from './ProxyEmp.js';
export { reduce } from './reduce.js';
export { Stack, Queue, ArrayList } from './collection.js';
export { cal } from './cal.js';
export { telfmt, searchByKoreanInitialSound } from './regexp.js';

Array.prototype.mapBy = function (k) {
  // 이 부분을 작성하시오.
  return this.map(a=>a[k]);
};

Array.prototype.groupBy = function (gfn) {
  // 이 부분을 작성하시오.
};
