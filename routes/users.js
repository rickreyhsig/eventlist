var express = require('express');
var router = express.Router();

var userService = require('../services/user-service');

router.get('/', function(req, res, next) {
  userService.getUsers(function(err, users) {
    if (err) {
      console.log(err);
      return next(err);
    }
    var vm = {
      title: 'Users',
      users: users
    }
    return res.render('users/index', vm);
  })
})
/* GET user page. TODO: show list of users
router.get('/', function(req, res) {
  res.render('users/index', { title: 'Users Admin' });
});
*/
module.exports = router;
