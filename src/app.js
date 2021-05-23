const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

app.use(morgan('dev'));
app.use(cors())

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes
app.use(require('./routes/index'));

module.exports = app;