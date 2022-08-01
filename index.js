var express = require('express')

var products = require('./routs/products');
var users = require('./routs/users');
var app = express();

app.use('/products',products);
app.use('/users',users);
app.listen(4000);