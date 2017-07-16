var express = require('express');
var router = express.Router();

var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'whosdaz@gmail.com',
  token:     'h4ZJdjFkwyVbFYGomZ3aum69ThiWBXVx6fdiG077',
  remoteUri: 'https://mallenintern.zendesk.com/api/v2'
});

/* GET home page. */
router.get('/', function(reqo, res, next) {
  res.render("loading");
});

module.exports = router;
