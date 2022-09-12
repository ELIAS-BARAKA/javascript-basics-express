const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder, roundDown } = require('./lib/numbers');
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

module.exports = app;
