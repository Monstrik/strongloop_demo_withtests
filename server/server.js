var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function () {
    console.log("server.js app starting...")


    // start the web server
	return app.listen(function () {
		var doSomething = function () {
			var tags = require("../lib/tags.js");
			var search = require("../lib/search.js");
			
			
			var defaults = {
				path: ".",
				query: "",
				depth: 2
			}
			var replacements = {
				p: "path",
				q: "query",
				d: "depth",
				h: "help"
			}
			
			tags = tags.parse(process.argv, defaults, replacements);
			
			if (tags.help) {
				console.log("Usage: ./app.js -q=query [-d=depth] [-p=path]");
			} else {
				search.scan(tags.path, tags.depth, function (err, files) {
					search.match(tags.query, files).forEach(function (file) {
						console.log(file);
					});
				});
			}
		}
		doSomething();
		app.emit('started');
        console.log('Web server listening at: %s', app.get('url'));
    });
	
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
    if (err) throw err;
    
    console.log("require.main === module - " + (require.main === module));
    console.log("process.isPackaged - " + process.isPackaged);
  
    //console.log("\n\n\n");
    // start the server if `$ node server.js`
    if (require.main === module || process.isPackaged) {
        app.start();
    }
    

});
