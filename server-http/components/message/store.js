
//const { updateMessage } = require('./controller');

const Model = require('./model')



    
function addMessage(message){
    try {
        const myMessage = new Model(message)
        myMessage.save()
    } catch (error) {
        console.log(error)
    }

}


async function getMessage(filterUser){
    return new Promise((resolve,reject)=>{
        let filter = {};
        if(filterUser != null){
            filter = {user:filterUser}
        }
        Model.find(filter)
        .populate('user')
        .exec((error, populated)=>{
            if(error){
                reject(error)
                return false
            }
            resolve(populated)
        })
     
  
    })

}



 async function updateMessage(id, message){
    const foundMessage =await  Model.findOne({
        id: id
    })
    foundMessage.message =message
    const newFoundMessage= foundMessage.save()
    return newFoundMessage

}

function removeMessage(id){
    return Model.deleteOne(
        {_id: id}
    )
}




//creamos un mok (falsear la base de datos)
// const list = [];


// function addMessage(message){
//     list.push(message)
// }

// function getMessage(){
//     return list;
// }

module.exports={
    add: addMessage,
    list: getMessage, 
    update:updateMessage,
    delete:removeMessage
}