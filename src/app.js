const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement2,
  removeNthElement,
} = require('./lib/arrays');
const app = express();
app.use(express.json());

// strings
app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:str', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.str) });
});

app.get('/strings/first-character/:str', (req, res) => {
  res.status(200).json({ result: firstCharacter(req.params.str) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const query = parseInt(req.query.length);
  res.status(200).json({ result: firstCharacters(string, query) });
});

// numbers

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num2, num1) });
  }
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num2, num1) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;
  if (num1 == undefined || num2 == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(num1) == true || isNaN(num2) == true) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(num2, num1) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;
  if (num1 == undefined || num2 == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(num1) == true || isNaN(num2) == true) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (num2 == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(num1, num2) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const num1 = req.body.a;
  const num2 = req.body.b;
  if (num1 == undefined || num2 == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(num1) == true || isNaN(num2) == true) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  if (num2 == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(num1, num2) });
  }
});

// booleans

app.post('/booleans/negate', (req, res) => {
  const value = req.body.value;
  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const value = req.body.value;
  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:value', (req, res) => {
  const value = req.params.value;
  if (isNaN(value) == true) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(value) });
  }
});

app.get('/booleans/:val1/starts-with/:val2', (req, res) => {
  const val1 = req.params.val1;
  const val2 = req.params.val2;
  const len = val2.length;
  if (len > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(val2, val1) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const index = req.params.index;
  const arr = req.body.array;
  res.status(200).json({ result: getNthElement(index, arr) });
});

app.post('/arrays/to-string', (req, res) => {
  const arr = req.body.array;
  res.status(200).json({ result: arrayToCSVString(arr) });
});

app.post('/arrays/append', (req, res) => {
  const val = req.body.value;
  const arr = req.body.array;
  res.status(200).json({ result: addToArray(val, arr) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const arr = req.body.array;
  res.status(200).json({ result: elementsStartingWithAVowel(arr) });
});

app.post('/arrays/remove-element', (req, res) => {
  // const val = req.query.index;
  const arr = req.body.array;
  let index = parseInt(req.query.index);
  console.log(typeof index);
  if (req.query.index == undefined) {
    index = 0;
    console.log(removeNthElement2(index, arr));
    res.status(200).json({ result: removeNthElement2(index, arr) });
  } else {
    console.log(index);
    console.log(removeNthElement2(index, arr));
    res.status(200).json({ result: removeNthElement2(index, arr) });
  }
});

module.exports = app;
