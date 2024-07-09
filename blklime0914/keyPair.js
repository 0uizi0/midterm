export const keyPair = (arr, n) => {
  const val_idx = {};
  let ret;
  for (let i = 0; i < arr.length; i += 1) {
    let val = arr[i];
    let memoIdx = val_idx[n / val];
    if(arr[memoIdx] * val === n) {
      ret = [ memoIdx, i ];
      break;
    }
    val_idx[val] ?? (val_idx[val] = i);
  }
  return ret;
};
