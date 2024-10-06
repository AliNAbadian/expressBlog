const express = require("express");
const app = express();
const stats = require("./models/statistics");
require("./boot/index")(app);

app.get("/", (req, res) => {
  res.render("main", { layout: false, userID: 242 });
});

app.get("/stats", async (req, res) => {
  const data = await stats.totalUsers();
  res.status(200).json(data[0]);
});

const run = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log("App listening on port " + port);
  });
};

module.exports = run;
