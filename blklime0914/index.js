export { keyPair } from './keyPair.js';
export { ProxyEmp } from './ProxyEmp.js';
export { reduce } from './reduce.js';
export { Stack, Queue, ArrayList } from './collection.js';
export { cal } from './cal.js';
export { telfmt, searchByKoreanInitialSound } from './regexp.js';

Array.prototype.mapBy = function (k) {
  return this.map((val) => val[k]);
};

Array.prototype.groupBy = function (gfn) {
  let ret = {};
  console.log(this.filter(gfn()));
  return ;
};
