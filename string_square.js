function string_square(s){
  if (s == null || (typeof s !== 'string' && !(s instanceof String))) {
     return -1;
  }
  return s.length*s.length;
}
module.exports = {string_square};
