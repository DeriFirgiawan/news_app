/* eslint-disable global-require */
const { Model } = require('objection');

class NewsModel extends Model {
  static get tableName() {
    return 'table_news';
  }
}

module.exports = NewsModel;
