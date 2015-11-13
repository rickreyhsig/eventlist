var express = require('express');
var router = express.Router();

/* GET events page. TODO: show list of events and add form for a new one */
router.get('/', function(req, res) {
  res.render('index', { title: 'Event List' });
});

module.exports = router;
