var User = require('../models/user').User;

exports.getUsers = function(next) {
    User.find({}, function(err, users) {
        next(err, users);
    })
};