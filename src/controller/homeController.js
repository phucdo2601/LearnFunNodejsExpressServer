import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  let data = [];
  // connection.query("SELECT * FROM `users`", function (err, results, fields) {
  //   console.log(">>> check mysql: ");
  //   console.log(results); // results contains rows returned by server
  //   results.map((row) => {
  //     data.push({
  //       id: row.id,
  //       email: row.email,
  //       address: row.address,
  //       firstName: row.firstName,
  //       lastName: row.lastName,
  //     });
  //   });
  //   return res.render("index.ejs", {
  //     dataUser: data,
  //     test: "abc string test",
  //   });
  // });

  const [rows, fields] = await pool.execute("SELECT * FROM `users`");

  console.log(">>> check mysql: ", rows);

  return res.render("index.ejs", {
    dataUser: rows,
    test: "abc string test",
  });
};

let getDetailsPage = async (req, res) => {
  let id = req.params.id;
  let [user, field] = await pool.execute(
    "SELECT * FROM `users` WHERE  `id` = ?",
    [id]
  );
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getDetailsPage,
  createNewUser,
};
