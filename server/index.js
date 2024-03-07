const express = require('express');
const data = require('./db');
const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send("Helloou!");
});

server.get('/data', (req, res) => {
  res.status(200).json(data);
});

server.get('/data/estates', (req, res) => {
  const estates = data.data.estates;
  res.json(estates);
});

server.get('/data/estates/:id', (req, res) => {
  const { id } = req.params;
  const estate = data.data.estates.find(estate => estate.id === parseInt(id));

  if (estate) {
    res.json(estate);
  } else {
    res.status(404).send(`404 Not Found :(`);
  }
});

server.listen(port, () => {
  console.log('http://localhost:3000');
});