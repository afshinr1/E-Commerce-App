const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser')

app.use(fileUpload());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

const PORT = 5000 || process.env.PORT;
app.use(cors());


app.use('/', require('./routes'));


app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT );
});