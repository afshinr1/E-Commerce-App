const connection = require("../connection");

const addComment = (id, username, text, rating)=>{
    console.log(id, username, text, rating);

    return new Promise((resolve, reject) =>{
        let query =       "INSERT INTO comments (idproduct, content, username, rating) VALUES (?, ?, ?, ?)";
        connection.query(query, [id, text, username, rating], (error, results, field)=>{
                console.log(results);
                let newComment = { idproduct: id, content: text, commentid : results.insertId,  username: username, rating: rating};
                resolve(newComment);
        });
    });
}

const updateItemReview = (item) =>{
    console.log(item);
    return new Promise((resolve, reject) =>{

        let query = "UPDATE product SET countReview=? WHERE productId=?";
        connection.query(query, [item.countReview, item.productId], (error, results, field)=>{
            resolve("Success");
    });
});

}





module.exports.updateItemReview = updateItemReview;
module.exports.addComment = addComment;
