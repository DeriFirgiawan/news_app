const jwt = require('jsonwebtoken');
const UserModel = require('../../Models/UserModels');

exports.DashboardController = async (req, res) => {
  const { authorization } = req.headers;
  const userToken = authorization.split(' ')[1];

  try {
    const decodeJwt = jwt.verify(userToken, process.env.JWT_SECRET);
    const { id } = decodeJwt;
    const user = await UserModel.query().findById(id);

    const response = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      is_premium: user.is_premium,
    };

    res.status(200).json({
      status: 200,
      message: 'Success Get Information Profile',
      result: { ...response },
    });
  } catch (error) {
    console.log(error);
  }
};
