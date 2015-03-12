var arithmetic1 = function(n) {
  return n * 5 - 20;
};

var arithmetic2 = function (x, y) {
  if (x < y) {
    return x / 2;
  } else {
    return y / 2;
  }
};

var ten_twenty = function (n) {
  var result = 10
  if (n % 2 !== 0) {
    result = 20;
  }
  return result;
};

var grade = function (books, hasRead) {
  var gradeSet = ["B", "C", "D"]
  if (hasRead === true) {
    gradeSet.unshift("A");
  }

  var grade = gradeSet[2];
  if (books > 20) {
    grade = gradeSet[0];
  } else if (books >= 10) {
    grade = gradeSet[1];
  }
  return grade;
};