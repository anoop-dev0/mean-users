const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const app = express();
app.use(cors())
mongoose.connect('mongodb+srv://dev:dev@cluster0.leg7i.mongodb.net/3rdDec?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true})
mongoose.connection.once('open',()=>{
  console.log("\n connected to database \n");
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', express.static(path.join(__dirname,'public/images')));

module.exports = app;
