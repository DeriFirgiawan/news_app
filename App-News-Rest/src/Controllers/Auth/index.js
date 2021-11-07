/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

const UserModel = require('../../Models/UserModels');

const generatedAccessToken = require('../../Config/jwt.config');

// Helpers
const { errorBadRequest } = require('../../Helpers/badRequest');
const { convertUpperCaseName } = require('../../Helpers/convertUpperCaseName');

exports.AuthRegisterController = async (req, res) => {
  const {
    name, email, password, is_premium,
  } = req.query;
  if (!name) errorBadRequest(res, 'name is required');
  if (!email) errorBadRequest(res, 'email is required');
  if (!password) errorBadRequest(res, 'password is required');

  try {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const userExisting = await UserModel.query().where({ email }).first();
    const hasPassword = await bcrypt.hash(password, 12);
    const token = await generatedAccessToken({ email, password });

    if (userExisting) {
      res.status(400).json({
        status: 400,
        message: 'User is Existing',
        resutl: {
          id: userExisting.id,
          name: userExisting.name,
          email: userExisting.email,
        },
      });
    } else {
      const insertUser = await UserModel.query().insert({
        name: convertUpperCaseName(name),
        email,
        password: hasPassword,
        created_at: date,
        is_premium,
      });

      res.status(201).json({
        status: 201,
        message: 'Success Register',
        result: {
          id: insertUser.id,
          name: insertUser.name,
          email: insertUser.email,
          token,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.AuthLoginController = async (req, res) => {
  const { email, password } = req.query;
  if (!email) errorBadRequest(res, 'email is required');
  if (!password) errorBadRequest(res, 'password is required');

  try {
    const checkUser = await UserModel.query().where({ email }).first();
    const { id } = checkUser;
    const comparePassword = await bcrypt.compare(password, checkUser.password);
    const token = generatedAccessToken({ id, email });
    if (!checkUser) {
      res.status(400).json({
        status: 400,
        message: 'User Not Found',
      });
    }

    if (!comparePassword) {
      res.status(400).json({
        status: 400,
        message: 'Wrong Password',
      });
    } else {
      res.status(200).json({
        status: 200,
        message: 'Success Login',
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
