var express = require('express');
var router = express.Router();

/* Declare messages array */
const messages = [
  {text: "Hi there!", user: "Amando", added: new Date()},
  {text: "Hello World!", user: "Charles", added: new Date()}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new message page */
router.get('/new', function(req, res, next) {
  res.render('form', { title: "Post Message"});
});

/* Handle POST requests */
router.post('/new', function(req, res) {
  messages.push({text: req.body.text, user: req.body.name, added: new Date()});
  res.redirect('/');
});

module.exports = router;
