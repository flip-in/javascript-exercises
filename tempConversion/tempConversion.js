const ftoc = function(temp) {
  const conv = (temp - 32) * (5/9)
  return Math.round(conv *10) /10;
  
}

const ctof = function(temp) {
  const conv = (temp * (9/5)) + 32;
  return Math.round(conv*10) / 10;

}

module.exports = {
  ftoc,
  ctof
}
