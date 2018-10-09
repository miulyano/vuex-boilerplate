const db = require('../models/db');
const schema = require('../models/schema');

// mongoose DB SCHEME;
const schemaNews = schema.News;

// controllers for GET request /api/getNews
module.exports.getNews = function (req, res) {
  db.getNews().then((results) => {
    res.json(results);
  })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

// controllers for POST request /api/newNews
module.exports.newNews = function (req, res) {
  console.log(req.body);
  db.newNews(req.body)
    .then(() => {
      db.getNews().then((results) => {
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

// controllers for DELETE request /api/deleteNews/:id
module.exports.deleteNews = function (req, res) {
  db.deleteNews(req.params.id)
    .then((results) => {
      if (results) {
        db.getNews().then((results) => {
          res.status(200).json(results);
        })
          .catch((err) => {
            res.status(400).json({ error: err.message });
          });
      } else {
        res.status(400).json({ error: 'Новость не найдена' });
      }
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
};

// controllers for PUT request /api/updateNews/:id
module.exports.updateNews = function (req, res) {
  schemaNews.findOne({ id: req.params.id })
    .then(news => {
      db.updateNews(req.body, news, req.params.id)
        .then(() => {
          db.getNews()
            .then((results) => {
              res.json(results);
            })
            .catch((err) => {
              res.status(400).json({ error: err.message });
            });
        });
    });
};
