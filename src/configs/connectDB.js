// import mysql from "mysql2";

// create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12345678",
//   database: "learn_node_express__server_b01",
// });
// export default connection;

//using connect pool for connect db
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "learn_node_express__server_b01",
});

export default pool;
