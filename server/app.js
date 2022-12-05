// import 3rd party modules
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const cors = require('cors');
require("dotenv").config();
//import routes
const productsRoute = require('./routes/products')


const app = express();

//config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//routes
app.use(productsRoute);


// getting config key
const db = process.env.mongoURI;

// connecting to mongodb 
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log('connected to mongodb sucessfully...!!!');
  })
  .catch((err) => {
    console.log('Error', err);
  })


// run app
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Running on port ${port}`))


module.exports = app;
