
function countLetters(charSpace) {
  var charMap = {}
  for (var i = 0; i < charSpace.length; i++){
    var mychar = charSpace[i].toLowerCase()
    if (mychar !== " ") {
      charMap[mychar] = charMap[mychar] + 1 || 1
    }
  }
return JSON.stringify(charMap,null,4)
};
console.log(countLetters("Lighthouse in the house"));

