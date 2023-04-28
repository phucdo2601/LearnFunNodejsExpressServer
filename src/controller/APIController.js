import pool from "../configs/connectDB";

//load all users
let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");

  //http
  //status code: 200, 201, 400, 404, 401, 403, 500
  //json xml
  return res.status(200).json({
    message: "Load data successfully",
    data: rows,
  });
};

//method POST create user
let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }
  await pool.execute(
    "update users set firstName= ?, lastName = ? , email = ? , address= ? where id = ?",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    message: "Update data successfully",
  });
};

let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(400).json({
      message: "Missing id fields",
    });
  }
  await pool.execute("delete from users where id = ?", [userId]);
  return res.status(200).json({
    message: "Delete data successfully",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
