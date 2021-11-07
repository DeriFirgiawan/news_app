/* eslint-disable global-require */
const { Model } = require('objection');

class UserModel extends Model {
  static get tableName() {
    return 'users';
  }

  static relationMappings() {
    const NewsModel = require('./NewsModel');
    return {
      newsById: {
        relation: Model.BelongsToOneRelation,
        modelClass: NewsModel,
        join: {
          from: 'users.id',
          to: 'table_news.user_id',
        },
      },
    };
  }
}

module.exports = UserModel;
