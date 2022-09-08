function negate(a) {
  // your code here
  return !a;
}

function both(a, b) {
  // your code here
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

function either(a, b) {
  // your code here
  if (a === true || b === true) {
    return true;
  } else {
    return false;
  }
}

function none(a, b) {
  // your code here
  if (a !== true && b !== true) {
    return true;
  } else {
    return false;
  }
}

function one(a, b) {
  // your code here
  if (a === true && b !== true) {
    return true;
  } else if (a !== true && b === true) {
    return true;
  } else {
    return false;
  }
}

function truthiness(a) {
  // your code here
   return a ? true : false; 
}

function isEqual(a, b) {
  // your code here
  if (a === b) {
    return true;
  }else{return false;}
}

function isGreaterThan(a, b) {
  // your code here
  if (a > b) {
    return true;
  }else{
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

function isOdd(a) {
  // your code here
  return !!(a % 2);
}

function isEven(a) {
  // your code here
  return a % 2 == 0;
}

function isSquare(a) {
  // your code here
  return a >= 0 && Math.sqrt(a) % 1 === 0;
}

function startsWith(char, string) {
  // your code here
  return !!string.startsWith(char);
}

function containsVowels(string) {
  const vowels = /[aeiou]/i;
  return vowels.test(string);
}

function isLowerCase(string) {
  // your code here
  if (string == string.toLowerCase()) {
    return true;
  }else{return false}
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  isEven,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
