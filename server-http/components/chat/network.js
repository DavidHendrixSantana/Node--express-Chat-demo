const express =require ('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')



router.post('/', function(req,res){
    controller.addChat(req.body.users)
    .then((data)=>{
        response.success(req,res,data)
    }).catch(e=>{
        response.error(req,res,e,500)
    })
})

router.get('/', function(req,res){
    controller.getChats()
    .then((data) =>{
        response.success(req,res,data)
    }).catch(e=>{
        response.error(req,res,e,500)
    })

})

module.exports =  router;
