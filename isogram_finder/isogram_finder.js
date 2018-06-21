const IsogramFinder = function (word) {
  this.word = Array.from(word)
}

IsogramFinder.prototype.isIsogram = function () {
  const letters = []
  
  for (const letter of this.word) {
    if (letters.includes(letter)) {
      return false
    }

    letters.push(letter)
  }
  return true
}

module.exports = IsogramFinder;
