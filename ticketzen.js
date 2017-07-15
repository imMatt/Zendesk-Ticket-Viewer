var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'whosdaz@gmail.com',
  token:     'pooh4ZJdjFkwyVbFYGomZ3aum69ThiWBXVx6fdiG077',
  remoteUri: 'https://mallenintern.zendesk.com/api/v2'
});


client.tickets.list(function (err, req, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Got " + result.length + " tickets")
  console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
});
