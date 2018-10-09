const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// all data types
const types = {
  username: {
    type: String,
    required: [true, 'username required'],
    unique: true,
    minlength: [3, 'username too short'],
    maxlength: [20, 'username too long']
  },
  text: {
    type: String,
    required: false,
    maxlength: [250, 'too long']
  },
  longtext: {
    type: String,
    required: false,
    minlength: [3, 'too short'],
    maxlength: [500, 'too long']
  },
  password: {
    type: String,
    required: [true, 'password required'],
    minlength: [3, 'too short'],
    maxlength: [250, 'too long']
  },
  id: {
    type: String,
    required: [true, 'id required'],
    unique: true
  }
};

// data newsScheme types
const newsScheme = new Schema({
  id: types.id,
  text: types.longtext,
  theme: types.text,
});

// data textsScheme types
const textsScheme = new Schema({
  id: types.id,
  name: types.text,
  textRU: Object,
  textEN: Object
});

// exports Scheme models
module.exports.News = mongoose.model('news', newsScheme);
module.exports.Texts = mongoose.model('texts', textsScheme);
