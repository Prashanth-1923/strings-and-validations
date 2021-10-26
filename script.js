// 'use strict';
// console.log('hi');

// 1.Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

function greeting(name) {
  if (name === 'Mubashir') {
    return 'Hello, my Love!';
  } else {
    return 'Hello, ' + name + '!';
  }
}
console.log(greeting('Matt'));
// (greeting("Helen"), "Hello, Helen!")
// (greeting("Mubashir"), "Hello, my Love!")

// 2.Create a function that takes a string and returns it as an integer.

function stringInt(str) {
  return Number(str);
}

console.log(stringInt('6'));
// Test.assertEquals(stringInt("2")
// Test.assertEquals(stringInt("10")
// .assertEquals(stringInt("666")

// 3.Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(s) {
  if (s.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(oddOrEven('apple'));

// 4.Create a function that takes an array and a string as arguments and return the index of the string.
function findIndex(arr, str) {
  return arr.indexOf(str);
}
console.log(findIndex(['Red', 'blue', 'Blue', 'Green'], 'blue'));

// 5.You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
function intToString(num) {
  return toString(num);
}

function stringToInt(num) {
  return parseInt(num);
}

console.log(intToString(10), stringToInt('10'));
//6.Create a function that takes a string and returns the concatenated first and last character.
function firstLast(name) {
  return name.slice(0, 1) + name.slice(name.length - 1);
  // return name.charAt(0) + name.charAt(name.length - 1);
}
console.log(firstLast('prashu'));

//7.Create a function that counts how many D's are in a sentence.
function countDs(sentence) {
  var num = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'd' || sentence[i] === 'D') {
      num++;
    }
  }
  return num;
}
console.log(countDs('My friend Dylan got distracted in school.'));
// 8.Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThanOrEqualToZero(2));
//9.Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    false;
  }
}
console.log(lessThan100(15, 20));
//10.JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

function and(a, b) {
  if (a && b == true) {
    return true;
  }
  return false;
}
console.log(and(true, false));
console.log(and(true, false));
console.log(and(true, false));
console.log(and(true, false));

//11.Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameNum(2, 2));

//12.Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
function isSeven(x) {
  return x === 7 ? true : false;
}
console.log(isSeven(7));

//12.Implement a function that returns true if the parameters are equal, and false if they are not.
function checkEquality(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEquality(1, 1));
console.log(checkEquality(1, true));
//13.Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
function isLastCharacterN(word) {
  if (word.endsWith('n')) {
    return true;
  } else {
    return false;
  }
}
console.log(isLastCharacterN('arun'));
//14.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
}
console.log(makesTen(5, 5));
//15.Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(n) {
  if (n % 5 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisibleByFive(10));
