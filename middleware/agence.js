module.exports = function(req, res, next) {
  if (!req.user.agence) return res.status(403).send("Forbidden");
  next();
};
