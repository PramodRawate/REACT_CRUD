const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db.js');
const employeesRoutes = require('./employees.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    () => {console.log('Database is Connected')},
    err => {console.log('Cannot connect to the datbase',err)}
)


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/employees',employeesRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});