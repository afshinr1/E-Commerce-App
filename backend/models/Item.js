const connection = require("../connection");
const { connect } = require("../connection");

const addComment = (id, username, text, rating)=>{

    return new Promise((resolve, reject) =>{
        let query =       "INSERT INTO comments (idproduct, content, username, rating) VALUES (?, ?, ?, ?)";
        connection.query(query, [id, text, username, rating], (error, results, field)=>{
                let newComment = { idproduct: id, content: text, commentid : results.insertId,  username: username, rating: rating};
                resolve(newComment);
        });
    });
}

const updateItemReview = (item) =>{
    return new Promise((resolve, reject) =>{

        let query = "UPDATE product SET countReview=? WHERE productId=?";
        connection.query(query, [item.countReview, item.productId], (error, results, field)=>{
            resolve("Success");
    });
});

}

const addStock = (id, stock) =>{
    return new Promise((resolve, reject) =>{

        let query = "UPDATE product SET stock=? WHERE productId=?";
        connection.query(query, [stock, id], (error, results, field)=>{
            resolve("Success");
    });
});
}

const updateRating = (id, rating) => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT countReview, rating FROM product WHERE productId=?';
        connection.query(query,[id], (error, results, field)=>{
            console.log(results);
            let data = results[0];
            let currRating = data.rating * data.countReview;
            let newTotalRating = currRating+rating;
            let newRating = newTotalRating/(data.countReview+1);

            let query2 = 'UPDATE product SET rating=? WHERE productId=?';
                connection.query(query2,[newRating, id], (error, results, field)=>{
                    resolve('success');
                });
    
        });
    });
}

module.exports.updateRating = updateRating;
module.exports.addStock = addStock;
module.exports.updateItemReview = updateItemReview;
module.exports.addComment = addComment;
