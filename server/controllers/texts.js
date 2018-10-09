const db = require('../models/db');
const schema = require('../models/schema');

// mongoose DB SCHEME;
const schemaTexts = schema.Texts;

module.exports.getTexts = function (req, res) {
  db.getTexts().then((results) => {
    res.json(results);
  })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

module.exports.newTexts = function (req, res) {
  console.log(req.body);
  db.newTexts(req.body)
    .then(() => {
      db.getTexts().then((results) => {
        res.status(200).json(results);
      })
        .catch((err) => {
          res.status(400).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

module.exports.deleteTexts = function (req, res) {
  db.deleteTexts(req.params.id)
    .then((results) => {
      if (results) {
        db.getTexts().then((results) => {
          res.status(200).json(results);
        })
          .catch((err) => {
            res.status(400).json({ error: err.message });
          });
      } else {
        res.status(400).json({ error: 'Тексты не найдены' });
      }
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
};

module.exports.updateTexts = function (req, res) {
  schemaTexts.findOne({ id: req.params.id })
    .then(news => {
      db.updateTexts(req.body, news, req.params.id)
        .then(() => {
          db.getTexts()
            .then((results) => {
              res.json(results);
            })
            .catch((err) => {
              res.status(400).json({ error: err.message });
            });
        });
    });
};
