const express =require ('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')


router.get('/', function(req, res){
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages).then(
    (messageList) =>
    {
        response.success(req,res,messageList)   
    })
    .catch(e =>{
        response.error(req,res,'Unexpected error', 500)
    })
})
router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req,res,fullMessage)
    }).catch(e=>{
        response.error(req,res,'Información invalida',400)
    })


})

router.patch('/:id', function(req,res){
    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
        response.success(req,res,data)

    }).catch(e =>{
        response.error(req,res,e, 500)
    })
})

router.delete('/:id', function(req, res){
    const id = req.params.id
    controller.deleteMessages(id)
    .then(()=>
        response.success(req,res,'Eliminado exitosamente'))
        .catch(e=>
        response.error(req,res,e,500))
})

module.exports =  router;