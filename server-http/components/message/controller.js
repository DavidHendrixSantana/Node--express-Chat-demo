const store = require('./store')

function addMessage(user, message){
  
    return new Promise((resolve, reject) =>{
        if(!user || !message){
            reject('Datos incorrectos')
            return false
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject)=>{
        if(!id || !message){
            reject('invalida data')
            return false
        }
        const result=await resolve(store.update(id, message))
        resolve(result) 
    })
}

function deleteMessages(id){
    return new Promise((resolve,reject)=>{
        if(!id){
            reject('invalid id')
            return false
        }
        store.delete(id)
        .then(()=> {resolve()})
        .catch(e=>{
            reject(e)
        })
    })
    
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessages
}