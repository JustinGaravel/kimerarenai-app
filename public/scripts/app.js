"use strict";

var multiplier = {
  // array of numbers to multiple
  // single num = multiply by
  // multiply method - return new array w numbers mutiplied
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
