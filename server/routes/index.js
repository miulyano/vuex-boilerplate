const express = require('express');
const router = express.Router();
const path = require('path');

// start of use controllers
const ctrlNews = require('../controllers/news');
const ctrlTexts = require('../controllers/texts');

// all GET requests
router.get('/api/getNews', ctrlNews.getNews);
router.get('/api/getTexts', ctrlTexts.getTexts);

// all POST requests
router.post('/api/newNews', ctrlNews.newNews);
router.post('/api/newTexts', ctrlTexts.newTexts);

// all PUT requests
router.put('/api/updateNews/:id', ctrlNews.updateNews);
router.put('/api/updateTexts/:id', ctrlTexts.updateTexts);

// all DELETE requests
router.delete('/api/deleteNews/:id', ctrlNews.deleteNews);
router.delete('/api/deleteTexts/:id', ctrlTexts.deleteTexts);

module.exports = router;
