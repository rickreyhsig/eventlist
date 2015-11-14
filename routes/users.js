var express = require('express');
var router = express.Router();
// uncomment this when mongo is set up
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

router.get('/:userid', function(req, res, next){
    userService.getUser(req.params.userid, function(err, user) {
      if (err) {
        console.log(err);
        return next(err);
      }
      var vm = {
        title: 'User Details',
        user: user
      }
      return res.render('users/details', vm);
  })
})

/* GET user page. TODO: show list of users */
/*router.get('/', function(req, res) {
  var vm = {
    title: 'Users Admin',
    users: [
      {firstname:'Janet'},
      {firstname:'Frances', lastname:'Padua'},
      {firstname:'Johnny'}
    ]


  }
  res.render('users/index', vm);
});*/

module.exports = router;
