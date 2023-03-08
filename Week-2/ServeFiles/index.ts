import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath == './') {
    filePath = './pages/index.html'; 
  } else {
  
    const extname = path.extname(filePath);
    if (extname == '') {
      filePath += '.html'; 
    }
  }


  fs.exists(filePath, (exists) => {
    if (exists) {
      
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end(`Sunucu hatası: ${err}`);
        } else {
          
          let contentType = 'text/html';
          if (filePath.endsWith('.css')) {
            contentType = 'text/css';
          } else if (filePath.endsWith('.js')) {
            contentType = 'text/javascript';
          }
          
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    } else {
     
      res.writeHead(404);
      res.end('Sayfa bulunamadı.');
    }
  });
});


const port = 3000;
server.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
