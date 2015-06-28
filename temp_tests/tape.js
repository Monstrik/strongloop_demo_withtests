var test = require('tape');
var tags = require("../lib/tags.js");

test('summer tape ', function (t) {
    var args = ["--depth=4", "--hello=world"];
    var results = tags.parse(args);
	t.equal(results.depth, 4, 'should be equal');
	t.end();
})


