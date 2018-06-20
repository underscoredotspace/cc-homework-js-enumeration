const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  // make phrase lower case and remove non-alpha characters
  let phrase = this.phrase.toLowerCase().replace(/[^a-z]+/g, '')

  return this.alphabet.every(letter => phrase.includes(letter))
}

module.exports = PangramFinder;
