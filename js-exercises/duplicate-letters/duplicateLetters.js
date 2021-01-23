
function duplicateLetters(...args) {
  var duplicateCount = 0;
  var inputString = args.toString();
  for (var i1 = 0; i1 < inputString.length; i1++) {
    var regex = new RegExp(inputString[i1], "g");
    var count = (inputString.match(regex) || []).length;
    if (duplicateCount < count) {
      duplicateCount = count;
    }

  }

  return duplicateCount > 1 ? duplicateCount : false;
}

export {
  duplicateLetters,
};
