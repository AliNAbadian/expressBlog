const express = require("express");
const app = express();
require("./boot/index")(app);

app.get("/", (req, res) => {
  res.render("main", { layout: false, userID: 242 });
});

const run = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log("App listening on port " + port);
  });
};

module.exports = run;
