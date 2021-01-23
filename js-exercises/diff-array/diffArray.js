function diffArray(array1,array2) {
  let array1Diff=array1.filter(val=>   array2.indexOf(val)===-1)
  let array2Diff=array2.filter(val=>  array1.indexOf(val)===-1)
  let symmetricDiff=array1Diff.concat(array2Diff);
  return symmetricDiff;
}

export {
  diffArray,
};
