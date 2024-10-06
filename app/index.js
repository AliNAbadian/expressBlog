const express = require("express");
const app = express();
const stats = require("@models/statistics");
const post = require("@models/post");
require("./boot/index")(app);

app.get("/", (req, res) => {
  res.render("main", { layout: false, userID: 242 });
});

app.get("/stats", async (req, res) => {
  const users = await stats.totalUsers();
  const posts = await stats.totalPosts();
  const comments = await stats.totalComments();
  const views = await stats.totalViews();
  res.status(200).json({
    users: users,
    posts: posts,
    comments: comments,
    views: views,
    lastUpdated: new Date().toISOString().substring(0, 10),
    version: "1.0.0",
  });
});

app.get("/list-posts", async (req, res) => {
  const posts = await post.findAll();
  console.log(posts);
  res.status(200).json(posts);
});

const run = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log("App listening on port " + port);
  });
};

module.exports = run;
