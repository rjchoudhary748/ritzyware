var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b9suts7m8dvjnuwiqvdo-mysql.services.clever-cloud.com",
  user: "ugvonq0rjas1q3fm",
  password: "wFcIHgPMemB7eP20hTV",
  database: "b9suts7m8dvjnuwiqvdo",
  port: '20251'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con