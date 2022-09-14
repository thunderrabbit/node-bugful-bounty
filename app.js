const hostname = '0.0.0.0';
const port = 4000;

const express = require('express');
const app = express();
const router = express.Router();

router.get("/home", (req, res) => {
    res.send("Hello from " + req.url.replace(/^\//, ''));  // drop leading slash from URL
});

app.use('/', router);

app.listen(process.env.port || `${port}`, hostname, () => {
  console.log(`App running at http://${hostname}:${port}/`);
});
