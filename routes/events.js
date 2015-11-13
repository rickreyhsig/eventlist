var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET events page. TODO: show list of events and add form for a new one */
router.get('/', function(req, res) {
  var obj = JSON.parse(fs.readFileSync('./jsondata/events.json', 'utf8'));
  res.render('events/index', { data:obj, title:'Upcoming Events' });
});

router.get('/json', function(req, res) {
  var obj = JSON.parse(fs.readFileSync('./jsondata/events.json', 'utf8'));
  res.json(obj);
})

module.exports = router;
