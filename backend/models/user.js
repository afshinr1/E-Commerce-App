const connection = require("../connection");

const validate = (username, password) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM users WHERE username=? AND password=?";
    connection.query(query, [username, password], (error, results, fields) => {
      if (results.length > 0) {
        resolve({
          user: {
            email: results[0].email,
            username: results[0].username,
            password: results[0].password,
            role: results[0].role,
            firstName: results[0].firstname,
            lastName: results[0].lastname
          },
        });
      } else {
        resolve({ user: null });
      }
    });
  });
};

const register = (firstName, lastName, username, password, email, role) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE username=? OR email=?",
      [username, email],
      (error, results, fields) => {
        if (results.length > 0) {
          resolve("false");
        } else {
          let sql =
            "INSERT INTO users (username, password, email, role, firstname, lastname) VALUES (?, ?, ?, ?, ?, ?)";

          connection.query(
            sql,
            [username, password, email, role, firstName, lastName],
            (error, results, fields) => {
              resolve("true");
            }
          );
        }
      }
    );
  });
};

module.exports.validate = validate;
module.exports.register = register;