function searchWord(sentence, word) {
  let x = 0;
  let y = 0;

  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] == word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (sentence[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  return "'" + word + "' was found " + x + " times.";
}

console.log(searchWord("The quick brown fox", "fox")); // "'fox' was found 1 times."
console.log(searchWord("aa, bb, cc, dd, aa", "aa")); // "'aa' was found 2 times."
console.log(searchWord("sunshine", "sun")); // "'sun' was found 1 times."
