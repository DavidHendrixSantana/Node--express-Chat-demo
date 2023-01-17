const express =require ('express')
const bodyParser = require('body-parser');
const { response } = require('express');

// const router  = require('./components/message/network')
const router = require('./network/routes')

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router)

router(app)
 


app.listen(3000)

