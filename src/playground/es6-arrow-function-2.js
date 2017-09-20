const multiplier = {
  // array of numbers to multiple
  // single num = multiply by
  // multiply method - return new array w numbers mutiplied
  numbers: [10,20,30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => {
      return number * this.multiplyBy;
    })
  }
};

console.log(multiplier.multiply());