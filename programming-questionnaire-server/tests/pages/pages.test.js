const expect = require('chai').expect;
const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

it('Healthcheck content', function (done) {
  request('http://localhost:8080/healthcheck', function (error, response, body) {
    expect(response.statusCode).to.equal(200);
    expect(JSON.parse(body).status).to.equal('UP');
    done();
  });
});

it('NotFound content', function (done) {
  request('http://localhost:8080/dummy/endpoint', function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    expect(JSON.parse(body).error).to.contain('Page Not Found');
    done();
  });
});
