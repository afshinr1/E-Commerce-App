const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(fileUpload());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

const uri = "mongodb+srv://afshin:kuraikami@cluster0-qku4z.mongodb.net/project?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true,  useCreateIndex: true})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});

const PORT = 5000 || process.env.PORT;
app.use(cors());


app.use('/', require('./routes'));


app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT );
});