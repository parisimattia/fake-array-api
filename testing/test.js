var assert = require('assert');
const request = require('supertest');
const app = require ('../app');

describe('USERS', function() {
  it('GET all users', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS', function() {
  it('POST all users', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .send ({name : 'caino', surname: 'abele', email: 'cainoeabele@gmail.com'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});
