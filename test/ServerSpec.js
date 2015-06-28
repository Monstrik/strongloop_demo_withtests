var supertest = require('supertest');
var expect = require('chai').expect;
var app = require('../server/server.js');
var should = require('chai').should();

var site = supertest('http://localhost:3000');



//describe('information at root directory of server',  function () {
//	it('is connecting locally', function (done) {
//		site.get('/')
//		.expect(200, function (err, data) {
//			console.log('error: ', err);
//			console.log('data: ', data);
//		})
//		.end(done);
//	});

//});