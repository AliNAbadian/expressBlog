const db = require("@db/mysql");

exports.findAll = async () => {
  const [rows, fields] = await db.query("SELECT * FROM posts");
  return rows;
};
