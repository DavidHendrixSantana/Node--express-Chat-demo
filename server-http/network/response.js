exports.success = (req,res,message)=>
    res.send({
        error:'',
        body: message
    })

exports.error = (req,res,message,status)=>
    res.send(message)