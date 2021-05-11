#! /usr/bin/env node

// Sort strings (descending) by longest substring of contiguous vowels
function sortStringsByVowels(strings) {
  var results = [...strings];

  results.sort((a, b) => {
    return longestVowels(b) - longestVowels(a);
  });

  return results;
}

function longestVowels(str) {
  let vowels = str.match(/[aeiou]+/gi) || [''];

  vowels.sort((a, b) => {
    return b.length - a.length;
  });

  return vowels[0].length;
}

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]) ); //,["iiii","eee","aa","oo"]);
console.log(sortStringsByVowels(["a","e","ii","ooo","u"]) );  //,["ooo","ii","a","e","u"]);
console.log(sortStringsByVowels( ["ioue","ee","uoiea"]) );    // , ["uoiea", "ioue","ee"]);
console.log(sortStringsByVowels( ["high","day","boot"]) );    //, ["boot","high","day"]);
console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]) );  //, ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) ); // , ["GREEEN","AIBRH","YOUNG",""]);
console.log(sortStringsByVowels(["jyn","joan","jimmy","joey"]) ); // , ["joan","joey","jimmy","jyn"]);
console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) );// , ["iiutrqy","uijijeoj","lkjlkjww2"]);
console.log(sortStringsByVowels(["how about now","a beautiful trio of"]) );// , ["a beautiful trio of","how about now"]);
console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) ); // , ["waaaay","bataux","loose","every","is"]);
