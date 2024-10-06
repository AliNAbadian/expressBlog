const express = require("express");
const hbs = require("express-handlebars");

const path = require("path");

module.exports = (app) => {
  const hbsInstance = hbs.create();
  app.engine("hbs", hbsInstance.engine);
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../views"));
  app.use(express.static(path.join(__dirname, "../../public")));
};
