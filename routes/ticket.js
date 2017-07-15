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
  var id = reqo.query.id;

  client.tickets.show(id, function (err, req, result) {
    if (err) {
      res.status(err.statusCode)
      res.render('error', {error: err})
      return;
    }

    client.tickets.getComments(id, function (err, req, resultComments) {
      if (err) {
        res.status(err.statusCode)
        res.render('error', {error: err})
        return;
      }
      //res.end(JSON.stringify(resultComments[0].comments, null, 4))

      var commentList = resultComments[0].comments;
      //Remove first element, as it is the description
      commentList.shift();

      res.render('ticket', { ticket: result, listofcomments: commentList});
      //res.end(JSON.stringify(resultComments, null, 4))
    });
  });
});

module.exports = router;
