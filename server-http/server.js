const express =require ('express')
const bodyParser = require('body-parser');
const { response } = require('express');

const db = require('./db');
const url = 'mongodb://admin:ape7mYQtnRzT7KMg@ac-pnbw1yt-shard-00-00.0izakwx.mongodb.net:27017,ac-pnbw1yt-shard-00-01.0izakwx.mongodb.net:27017,ac-pnbw1yt-shard-00-02.0izakwx.mongodb.net:27017/?ssl=true&replicaSet=atlas-k4x19d-shard-0&authSource=admin&retryWrites=true&w=majority;';

db.connect(url)
// const router  = require('./components/message/network')
const router = require('./network/routes')



var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router)

router(app)
 


app.listen(3000)

