const express = require("express");
const app = express();

const run = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log("App listening on port " + port);
  });
};

module.exports = run;
