var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./app');
  });
  afterEach(function () {
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('ticket routes', function () {
  var server;
  beforeEach(function () {
    server = require('./app');
  });
  afterEach(function () {
  });
  it('tickets overview', function testTickets(done) {
  request(server)
    .get('/tickets')
    .expect(200, done);
  });
  it('specific ticket', function testTicket(done) {
    request(server)
      .get('/ticket?id=1')
      .expect(200, done);
  });
  it('specific ticket (no id)', function testNoIDForTicket(done) {
    request(server)
      .get('/ticket')
      .expect(400, done);
  });
  it('non-existing ticket', function testMissingTicket(done) {
    request(server)
      .get('/ticket?id=9999')
      .expect(404, done);
  });
});
