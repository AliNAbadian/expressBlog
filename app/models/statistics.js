const db = require("../../database/mysql");

exports.totalUsers = async () => {
  const [result] = await db.query("SELECT COUNT(id) as totalUsers FROM users");
  console.log(result);
  return result;
};
