

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
        resolve(fullMessage)
    })

   

}

module.exports = {
    addMessage,
}