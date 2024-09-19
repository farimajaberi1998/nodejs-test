function Auth(req, res, next) {
  console.log("Authentication");
  next();
}

module.exports = Auth;