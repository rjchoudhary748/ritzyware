var mysql = require('mysql');

var con = mysql.createConnection({
  host: "b33pvr9lvxup5y2lyz5k-mysql.services.clever-cloud.com",
  user: "ueklrzvraggfefrt",
  password: "x8W5zBAmNW1qrYdjEaCM",
  database: "b33pvr9lvxup5y2lyz5k"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con