const hostname = '0.0.0.0';
const port = 4000;

const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    // log the URL and date to help me follow what's going on as it gets more complex
    console.log('Router middleware ', req.url, Date.now(), '"');
  next();
});

router.get("/home", (req, res) => {
    res.send("Hello from " + req.url.replace(/^\//, ''));  // drop leading slash from URL
});

router.get("*", (req, res) => {
    res.send("Hello, " + req.url.replace(/^\//, ''));  // drop leading slash from URL
});

// add middleware before routes
app.use((req, res, next) => {
    // log the URL and date to help me follow what's going on as it gets more complex
    console.log('App middleware says, "stop, hammertime:', req.url, Date.now(), '"');
  next();
});

app.use('/', router);

app.listen(process.env.port || `${port}`, hostname, () => {
  console.log(`App running at http://${hostname}:${port}/`);
});
