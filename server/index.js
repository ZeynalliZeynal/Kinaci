const express = require('express');
const data = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Helloou!");
});

app.get('/data', (req, res) => {
  res.status(200).json(data);
});

app.get('/data/estates', (req, res) => {
  const estates = data.data.estates;
  res.json(estates);
});

app.get('/data/estates/:id', (req, res) => {
  const { id } = req.params;
  const estate = data.data.estates.find(estate => estate.id === parseInt(id));

  if (estate) {
    res.json(estate);
  } else {
    res.status(404).send(`404 Not Found :(`);
  }
});

app.listen(port, () => {
  console.log('http://localhost:3000');
});

module.exports = app;