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
    let query = "SELECT * FROM product as p, comments as c WHERE p.productId=? AND c.idproduct=p.productId";
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

const addItem = (username,name, stock, cost, manufacturer, fileName, description) =>{
  return new Promise((resolve, reject) => {
    let query = "INSERT INTO product (name, stock, description, rating, cost, manufacturer, countReview, item_img, musername) VALUES (?,?,?,?,?,?,?,?,?)";
    connection.query(query, [name, stock, description, 0, cost, manufacturer, 0, fileName, username], (error, results, field) => {
      if(error){
        resolve('error in adding item');
      }
      else
      resolve('success in adding item');
    });
  });
}

const getMyItems = (username) =>{
  return new Promise((resolve, reject) => {
    console.log(username + 'jaja');
    let query = "SELECT * FROM product WHERE musername=?";
    connection.query(query, [username], (error, results, field) => {
      resolve(results);
    });
  });
}
const getCustomers = (username) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM purchases as p, product as c WHERE p.productId=c.productId AND c.musername=?";
    connection.query(query, [username], (error, results, field)=>{
      resolve(results);
    });
  });
}

const search = (value) =>{
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM product";
    connection.query(query, [], (error, results, field) => {
      let newResults = results.filter(result =>{
        let name = result.name.toLowerCase();
        value = value.toLowerCase();
        if(name.includes(value))
           return result;
      });
      resolve(newResults)
    });
  });
}

module.exports.search = search;
module.exports.getCustomers = getCustomers;
module.exports.getMyItems = getMyItems;
module.exports.addItem = addItem;
module.exports.getPurchases = getPurchases;
module.exports.getComments = getComments;
module.exports.getItem = getItem;
module.exports.getItems = getItems;
