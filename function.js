const sum = (a, b) => a + b;

const stringLength = (string) => {
    if (string.length > 0 && string.length < 10) {
      return string.length;
    } else {
      throw new Error('String length is not between 0 & 10');
    }
  };
  











module.exports = {sum, stringLength};