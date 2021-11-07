/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
const { fn, ref } = require('objection');

const NewsModel = require('../../Models/NewsModel');
const UserModel = require('../../Models/UserModels');

// Helper
const { errorBadRequest } = require('../../Helpers/badRequest');

exports.NewsInsertController = async (req, res) => {
  const { id, title, body } = req.query;
  if (!id) errorBadRequest(res, 'id is required');
  if (!title) errorBadRequest(res, 'title is required');
  if (!body) errorBadRequest(res, 'body is required');

  try {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const checkUser = await UserModel.query().findById(id);

    if (!checkUser) {
      res.status(404).json({
        status: 404,
        message: 'User Not found',
      });
    }
    const insertNews = await NewsModel.query().insert({
      user_id: id,
      title,
      body,
      created_at_news: date,
    });

    res.status(201).json({
      status: 201,
      message: 'Success Created News',
      result: { ...insertNews },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.NewsByIdController = async (req, res) => {
  const { user_id } = req.params;
  if (!user_id) errorBadRequest(res, 'id is required');

  try {
    const getNewsById = await UserModel.query()
      .select('*')
      .innerJoin('table_news', 'users.id', 'table_news.user_id')
      .where('table_news.id', user_id);

    const response = {};

    getNewsById.map((value) => {
      response.id = value.id;
      response.user_id = value.user_id;
      response.title = value.title;
      response.body = value.body;
      response.created_at = value.created_at_news;
      response.author = value.name;
      response.email = value.email;
    });

    res.status(200).json({
      status: 200,
      message: 'Success Get News',
      result: { ...response },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.NewsAllController = async (req, res) => {
  const { search } = req.query;
  try {
    if (!search) {
      const listNews = await UserModel.query()
        .select('*')
        .leftJoin('table_news', 'users.id', 'table_news.user_id');
      const response = [];

      listNews.map((value) => {
        response.push({
          id: value.id,
          user_id: value.user_id,
          title: value.title,
          body: value.body,
          author: value.name,
          email: value.email,
          created_at: value.created_at_news,
        });
      });
      res.status(200).json({
        status: 200,
        message: 'Success Get List News',
        result: [...response],
      });
    } else {
      const searchNewsList = await UserModel.query()
        .select('*')
        .leftJoin('table_news', 'users.id', 'table_news.user_id')
        .where(
          fn.concat(ref('title'), ref('name'), ref('body')), 'ilike', `%${search}%`,
        )
        .limit(5);

      const response = [];

      searchNewsList.map((value) => {
        response.push({
          id: value.id,
          user_id: value.user_id,
          title: value.title,
          body: value.body,
          author: value.name,
          email: value.email,
          created_at: value.created_at_news,
        });
      });
      res.status(200).json({
        status: 200,
        message: 'Success Search Data',
        result: [...response],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
