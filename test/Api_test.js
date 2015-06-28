var should = require('chai').should();
var expect = require("chai").expect;
var supertest = require('supertest');
var site = supertest('http://localhost:3000');
var api = supertest('http://localhost:3000/api');


//describe('Api test', function () {
	
//	before(function (done) {
//		api.post('/locations')
//		.set('Accept', 'application/x-www-form-urlencoded')
//		.send({
//			addressStreet: 'Some street adress',
//			addressCity: 'Some city',
//		})
//		.expect(200, done);
//	})

//	it('should be get locations', function (done) {
//		api.get('/locations')
//		.set('Accept', 'application/x-www-form-urlencoded')
//		.expect(200)
//		.end(function (err, res) {
//			expect(res.body.addressCity).to.equal('Some city');
//			expect(res.body.addressStreet).to.equal('Some street adress');
//			done();
//		});
//	})

//});

describe('Api Eplorer online and API Version check', function () {
	it('should return a 200 response', function (done) {
		site.get('/explorer/resources')
		.set('Accept', 'application/json')
		.expect(200, done);
	})
	
	it('should be an object with keys and values', function (done) {
		site.get('/explorer/resources')
		.set('Accept', 'application/json')
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.have.property('apiVersion');
			expect(res.body.apiVersion).to.not.equal('2.0.0');
			expect(res.body.apiVersion).to.equal('1.0.0');
			done();
		});
	})

	//it('should be updated with a new name', function (done) {
	//	api.put('/Users/1')
	//	.set('Accept', 'application/json')
	//	.send({
	//		name: 'Kevin',
	//		role: 'Editor'
	//	})
	//	.expect(200)
	//	.end(function (err, res) {
	//		expect(res.body.name).to.equal('Kevin');
	//		expect(res.body.role).to.equal('Editor');
	//		done();
	//	});
	//})


	
});

describe('Api Auth test', function () {
	it('should return a 401 response', function (done) {
		api.get('/users/1')
		.set('Accept', 'application/json')
		.expect(401, done);
	})
	
	

	it('should not be able to access user info', function (done) {
		api.get('/users/2')
		.set('Accept', 'application/json')
		.expect(401)
		.end(function (err, res) {
			var response = res.res;
			if (err) return done(err);
			expect(response.statusMessage).to.equal("Unauthorized");
			done();
		});
	})

	
});


