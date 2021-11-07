exports.errorBadRequest = (value, message) => value.status(400).json({
  status: 400,
  message,
});
