const express = require('express');
const server = express();

const hostname = '0.0.0.0';
const port = 4000;

server.listen(process.env.port || `${port}`, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
