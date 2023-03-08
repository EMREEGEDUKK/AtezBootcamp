var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (req, res) {
  
    var filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './pages/index.html';
    }
    else {
        
        var extname = path.extname(filePath);
        if (extname == '') {
            filePath += '.html';
        }
    }
    
    fs.exists(filePath, function (exists) {
        if (exists) {
           
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    
                    res.writeHead(500);
                    res.end("Sunucu hatas\u0131: ".concat(err));
                }
                else {
                   
                    var contentType = 'text/html';
                    if (filePath.endsWith('.css')) {
                        contentType = 'text/css';
                    }
                    else if (filePath.endsWith('.js')) {
                        contentType = 'text/javascript';
                    }
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                }
            });
        }
        else {
            res.writeHead(404);
            res.end('Sayfa bulunamadı.');
        }
    });
});
var port = 3000;
server.listen(port, function () {
    console.log("Sunucu \u00E7al\u0131\u015F\u0131yor: http://localhost:".concat(port));
});
