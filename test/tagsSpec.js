var lt = require('loopback-testing');
var assert = require('assert');
var app = require('../server/server.js'); //path to app.js or server.js 
var expect = require("chai").expect;
var tags = require("../lib/tags.js");

describe("Tags", function () {
	describe("#parse()", function () {
		it("should parse long formed tags", function () {
			var args = ["--depth=4", "--hello=world"];
			var results = tags.parse(args);
			
			expect(results).to.have.a.property("depth", 4);
			expect(results).to.have.a.property("hello", "world");
		});

		it("should parse long formed tags and convert numbers", function () {
			var args = ["--depth=4", "--hello=world"];
			var results = tags.parse(args);
			
			expect(results).to.have.a.property("depth", 4);
			expect(results).to.have.a.property("hello", "world");
		});
		it("should fallback to defaults", function () {
			var args = ["--depth=4", "--hello=world"];
			var defaults = { depth: 2, foo: "bar" };
			var results = tags.parse(args, defaults);
			
			var expected = {
				depth: 4,
				foo: "bar",
				hello: "world"
			};
			
			expect(results).to.deep.equal(expected);
		});

		it("should accept tags without values as a bool", function () {
			var args = ["--searchContents"];
			var results = tags.parse(args);
			
			expect(results).to.have.a.property("searchContents", true);
		});

		//it("should accept short formed tags", function () {
		//	var args = ["-sd=4", "-h"];
		//	var replacements = {
		//		s: "searchContents",
		//		d: "depth",
		//		h: "hello"
		//	};
			
		//	var results = tags.parse(args, {}, replacements);
			
		//	var expected = {
		//		searchContents: true,
		//		depth: 4,
		//		hello: true
		//	};
			
		//	expect(results).to.deep.equal(expected);
		//});
	});
});


describe("JSON", function () {
	describe(".parse()", function () {
		it("should detect malformed JSON strings", function () {
           //Test Goes Here
		});
	});
});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
})


//describe('/products', function () {
//    lt.beforeEach.withApp(app);
//    lt.describe.whenCalledRemotely('GET', '/products', function () {
//        lt.it.shouldBeAllowed();
//        it('should have statusCode 200', function () {
//            //assert.equal(this.res.statusCode, 200);
//        });

//        lt.beforeEach.givenModel('product');
//        it('should respond with an array of products', function () {
//            //assert(Array.isArray(this.res.body));
//        });
//    });
//});