module.exports = function reverse(n) {
   let reg = /-/g;
   let result = String(n).replace(reg, '');
   return Number(result.split('').reverse().join(''));
};
