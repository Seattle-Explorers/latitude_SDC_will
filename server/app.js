const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

app.use(express.static(PUBLIC));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('../database/index.js');

app.get('/api/:id', (req, res) => {
  const paddedId = req.params.id;
  db.retrieveListing(paddedId, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = app;