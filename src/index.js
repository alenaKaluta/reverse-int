module.exports = function reverse (n) {
  const numString = Math.abs(n).toString();
  const numArr = numString.split('');
  const reverseArr = numArr.reverse();
  const result = reverseArr.join('');
  return +result;
}
