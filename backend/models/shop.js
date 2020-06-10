const connection = require("../connection");

const getItems = () => {
  console.log("in get items");
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM product";
    connection.query(query, [], (error, results, field) => {
      resolve(results);
    });
  });
};

const getItem = (id) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM product WHERE productId=?";
    connection.query(query, [id], (error, results, field) => {
      resolve(results);
    });
  });
};
const getComments = (id) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT DISTINCT * FROM comments as c, users as u WHERE idproduct=? AND c.username=u.username";
    connection.query(query, [id], (error, results, field) => {
      resolve(results);
    });
  });
};

const getPurchases = (username)=>{
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM purchases as c, product as p WHERE c.username=? AND p.productId=c.productId";
    connection.query(query, [username], (error, results, field) => {
      resolve(results);
    });
  });
}

module.exports.getPurchases = getPurchases;
module.exports.getComments = getComments;
module.exports.getItem = getItem;
module.exports.getItems = getItems;
