const http = require('http');

const hostname = '0.0.0.0';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch(req.url) {
    case "/home":
	res.end('<h1>Hello Home</h1>');
	break;
    case "/about":
	res.end('<h1>About last night</h1>');
	break;
    default:
	res.end('<h1>Hello ' + req.url.replace(/^\//, '') + '</h1>');  // drop forward slash from URL
	break;
    }	
    console.log("Serving " + req.url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
