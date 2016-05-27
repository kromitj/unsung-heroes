User = require('../models/user');

module.exports.controller = function(app) {
  get('/users', function(req, res) {
    User.getUsers(function(err, users) {
      if(err) { throw err };
      res.json(users);
    });
  });
};