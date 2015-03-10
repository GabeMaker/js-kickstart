// Given two numbers, a and b, return half of whichever is smallest, as a float

var arithmetic2 = function (a, b){
  var smallest = a;
  if (a > b) {
    smallest = b;
  }
  return smallest / 2.0;
};