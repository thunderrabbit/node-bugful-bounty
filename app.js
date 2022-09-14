const hostname = '0.0.0.0';
const port = 4000;

const express = require('express');
const server = express();
const router = express.Router();

router.get("/home", (req, res) => {
    res.send("Hello from " + req.url.replace(/^\//, ''));  // drop leading slash from URL
});

server.use('/', router);

server.listen(process.env.port || `${port}`, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
