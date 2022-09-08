const getNthElement = (index, array) => {
  // your code here
  let len = array.length;
  if (index > len-1) {
    index = index - len;
    return array[index];
  }else{return array[index];}
};

const arrayToCSVString = array => {
  // your code here
  return array.join();
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1)
};

const numbersToStrings = numbers => {
  // your code here
  let newArr = numbers.map((items) => {
    return String(items);
  });
  return newArr;
};

const uppercaseWordsInArray = strings => {
  // your code here
  let uppArr = strings.map(items => {
    return items.toUpperCase();
  })
  return uppArr;
};

const reverseWordsInArray = strings => {
  // your code here
  let revArr = strings.map(items => {
    return items.split('').reverse().join('');
  })
  return revArr;
};

const onlyEven = numbers => {
  // your code here
  let evenNum = numbers.filter(items => {
    return items%2 == 0;
  });
  return evenNum;
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter((elem, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  // your code here
  let newArr = strings.filter(items => /^[AaEeIiOoUu]/i.test(items));
  return newArr;
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};
 
module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
