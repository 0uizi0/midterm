export function reduce (array, fn, initValue) {
  let ret = initValue ?? (typeof array[0] === 'object') ? {} : ((fn(0, 1) === 0) ? 1 : 0);
  array.map((val) => { ret = fn(ret, val) });
  return ret;
}
