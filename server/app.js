const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// creating an application and connecting MODELS
const app = express();
require('./models/index');

// start of use BODYPARSER & COOKIEPARSER
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// start of use CORS
app.use(cors());

// start of use STATIC DIR & ROUTES
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', require('./routes/index'));

// error processing
app.use((req, res, next) => {
  res.status(404).json({err: `404\nNot found`});
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({err: '500\nServer error'});
});

// SERVER startup
app.listen(process.env.MONGOSERVER_PORT || 6006, function () {
  console.log(`Сервер с тестовым API запущен на порте: ${process.env.MONGOSERVER_PORT || 6006}`);
});
