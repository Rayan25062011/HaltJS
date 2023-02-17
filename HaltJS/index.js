var http = require('http');
var fs = require('fs');

function HaltJS() {
    function webServer(htmlfile) {
        http.createServer(function (req, res) {
            fs.readFile(htmlfile, function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        }).listen(8080);
    };

    if (process.argv[2] != '') {
        webServer(process.argv[2]);
    } else {
        console.log('[ERROR] No HTML file found in argv');
    }
}