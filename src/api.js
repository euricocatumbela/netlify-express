const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    Hello: "hi",
  });
});

router.get("/test", function (req, res) {
  res.json({
    test: "test",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
