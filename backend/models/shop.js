const connection = require("../connection");

const getItems = () =>{
console.log('in get items');
return new Promise((resolve, reject)=>{
    let query = 'SELECT * FROM product';
    connection.query(query,[], (error, results, field)=>{
        resolve(results);

    });
});
}


const getItem = (id)=>{

    return new Promise((resolve, reject)=>{
        let query = 'SELECT * FROM product WHERE productId=?';
        connection.query(query,[id], (error, results, field)=>{
            resolve(results);
    
        });
    });
}


module.exports.getItem = getItem;
module.exports.getItems = getItems;