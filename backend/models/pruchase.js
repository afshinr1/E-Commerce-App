const connection = require("../connection");

const addToPurchases = (username, productid, quantity) => {
  return new Promise((resolve, reject) => {
    let query =
      "INSERT INTO purchases (username, productId, quantity) VALUES (?,?,?)";
    connection.query(
      query,
      [username, productid, quantity],
      (erorr, results, field) => {
        resolve("successful");
      }
    );
  });
};

const reduceStock = (productid, quantity) => {
  return new Promise((resolve, reject) => {
    let stock;
    let query1 = "SELECT stock FROM product WHERE productId=?";
    connection.query(query1, [productid], (erorr, results, field) => {
      stock = results[0].stock;
      console.log(quantity + " " + stock);
      if (parseInt(quantity) > parseInt(stock))
        resolve("Not enough stock for purchase");
      else {
        let newStock = parseInt(stock) - parseInt(quantity);

        let query3 = "UPDATE product SET stock=? WHERE productId=?";
        connection.query(
          query3,
          [newStock, productid],
          (error, results, field) => {
            resolve("Success");
          }
        );
      }
    });
  });
};

module.exports.addToPurchases = addToPurchases;
module.exports.reduceStock = reduceStock;
