const express =require ('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')


router.get('/', function(req, res){
    response.success(req,res,'Entrando')
})
router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage)
    }).catch(e=>{
        response.error(req,res,'Información invalida',400)
    })


})
router.delete('/', function(req, res){
        
    console.log(req.query)
    console.log(req.body)
    res.send('Mensaje eliminado')
})

module.exports =  router;