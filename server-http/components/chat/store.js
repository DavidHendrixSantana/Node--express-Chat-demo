const Model = require('./model')

function addChat(users){
    try {
        const newChat = new Model(users)
        newChat.save() 
    } catch (error) {
        console.log(error)
        
    }
}

function listChats(){
    return Model.find()

}

module.exports = {
    add: addChat,
    list: listChats
}