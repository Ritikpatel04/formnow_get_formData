const firebase= require('./firebase/serviceAccountkey.json');
const express = require('express');
const bodyParser= require('body-parser');
const formData = require('./src/data/formdata');
const authMiddleware = require('./src/auth/authMiddleware');
const app = express();

app.use('*',authMiddleware);
app.use(bodyParser.json());

app.post('/form-data',formData );

app.listen(process.env.PORT, ()=>{
    console.log('listning at port 3002')
});