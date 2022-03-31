class Kata {

  sentencify(words) {
    words.unshift((words.shift().replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1))));
    return words.join(' ') + '.';
  }
}

module.exports = {
  Kata,
};