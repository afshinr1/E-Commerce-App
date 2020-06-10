const connection = require("../connection");

const addToCart = (username, productId) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM cart WHERE username=? AND productId=?";
    connection.query(query, [username, productId], (error, results, field) => {
      console.log(results);
      if (results.length > 0) resolve("Already exists in cart");
      else{
        let query2 = "INSERT INTO cart (username, productId ) VALUES (?, ?)";
        connection.query(query2, [username, productId], (error, results, field) => {
          resolve("Successfully added to cart");
        });
      }
    });
  
  });
};

const getCart = (username) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM cart as c, product as p WHERE c.username=? AND p.productId=c.productId";
        connection.query(query, [username], (error, results, field) => {
          resolve(results);
        });
      });
};
const deleteItem = (id, username) =>{
  return new Promise((resolve, reject)=>{
    let query = "DELETE FROM cart WHERE username=? AND productId=?";
    connection.query(query,[username, id], (erorr, results, field)=>{
        resolve('successful');
    } );
  });
}


module.exports.deleteItem = deleteItem;
module.exports.addToCart = addToCart;
module.exports.getCart = getCart;
