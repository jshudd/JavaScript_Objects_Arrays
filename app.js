console.log("Hello World!\n==========\n");

// Exercise 1 Section
/*
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;
  let number = 0;
  numbers.forEach((number, index) => {
    sum += number;
  });
  return sum;
}

console.log(arraySum(numbers));

*/
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
var book = {
  title: `Fight Club`,
  author: `Chuck Palahniuk`,
  numberOfPages: 208,
  readCount: 1,
  info: function () {
    let bookInfo = `${this.title} by ${this.author}, ${this.numberOfPages} pages, read ${this.readCount} times`;
    return bookInfo;
  },
};

var book2 = {
  info: function () {
    let bookInfo = `${this.title} by ${this.author}, ${this.numberOfPages} pages, read ${this.readCount} times`;
    return bookInfo;
  },
};

book2.title = `Jurassic Park`;
book2.author = `Michael Cricton`;
book2.numberOfPages = `448`;
book2.readCount = 3;

console.log(book.info());

console.log(book2.info());