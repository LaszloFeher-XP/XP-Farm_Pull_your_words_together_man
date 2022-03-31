class Kata {

  sentencify(words) {
    const firstWord = words.shift().replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1));
    words.unshift(firstWord);
    return words.join(' ') + '.';
  }
}

module.exports = {
  Kata,
};