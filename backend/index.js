const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors);

const PORT = 5000 || process.env.PORT;

app.use('/', (req, res, next)=>{
    res.json('hello world');
});


app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT );
});