const express =require ('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')


router.post('/',function(req,res){
    controller.addUser(req.body.name)
    .then(data =>{
        response.success(req,res,data)
    }).catch(e=>{
        response.error(req,res,e,500)
    })
})

router.get('/',function(req,res){
    controller.listUsers()
    .then(users =>{
        response.success(req,res,users)
    }).catch(e=>{
        response.error(req,res,e,500)
    })
})

module.exports = router