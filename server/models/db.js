const uuid = require('uuid/v1');
const schema = require('./schema');

// start of use mongoose DB SCHEME
const schemaNews = schema.News;
const schemaTexts = schema.Texts;

/*\*\*\*\*\* NEWS methods *\*\*\*\*\*\*/

// GET news/texts of DB DB
module.exports.getNews = function () {
  return schemaNews.find();
};

module.exports.getTexts = function () {
  return schemaTexts.find();
};

// SAVE new/text in DB
module.exports.newNews = (data) => {
  const New = new schemaNews({
    id: uuid(),
    text: data.text || '',
    theme: data.theme || ''
  });
  New.save();
  return schemaNews.find();
};

module.exports.newTexts = (data) => {
  const newText = new schemaTexts({
    id: uuid(),
    name: data.name || '',
    textRU: JSON.parse(data.textRU) || {},
    textEN: JSON.parse(data.textEN) || {}
  });
  newText.save();
  return schemaTexts.find();
};

// DELETE new/text of DB
module.exports.deleteNews = function (paramsId) {
  return schemaNews.findOneAndRemove({ _id: paramsId });
};

module.exports.deleteTexts = function (paramsId) {
  return schemaTexts.findOneAndRemove({ _id: paramsId });
};

// UPDATE new/text in DB
module.exports.updateNews = function (data, news, paramsId) {
  const News = {};
  News.text = data.text ? data.text : news.text;
  News.theme = data.theme ? data.theme : news.theme;
  return schemaNews.findOneAndUpdate({
    _id: paramsId
  }, {
    $set: News
  }, { new: true });
};

module.exports.updateTexts = function (data, news, paramsId) {
  const Texts = {};
  Texts.name = data.name ? data.name : news.name;
  Texts.textRU = data.textRU ? JSON.parse(data.textRU) : news.textRU;
  Texts.textEN = data.textEN ? JSON.parse(data.textEN) : news.textEN;
  return schemaTexts.findOneAndUpdate({
    _id: paramsId
  }, {
    $set: Texts
  }, { new: true });
};
