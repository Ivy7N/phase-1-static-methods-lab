class Formatter {
  static capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
      throw new Error('Input must be a non-empty string');
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }

    // Remove non-alphanumeric characters except dash, single quote, and space
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }

    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    return str
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return Formatter.capitalize(word);
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  }
}

module.exports = Formatter;
