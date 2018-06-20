const AnagramFinder = function (word) {
  this.word = word.toLowerCase()
}

function isAnagram(base, test) {
  if (base.length != test.length || base === test) { return false }

  base = Array.from(base)

  for (const letter of test) {
    const letterIndex = base.indexOf(letter.toLowerCase())

    if (letterIndex === -1) { return false }
    base.splice(letterIndex, 1)
  } 

  return true
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(word => isAnagram(this.word, word))
}

module.exports = AnagramFinder;
