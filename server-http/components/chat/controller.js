const { model } = require('mongoose')
const store = require('./store')

function addChat(users){

    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list')
    }

    const chat = {
        users:users
    }

    return store.add(chat)
}

function getChats(){
    return store.list()
}

module.exports ={
    addChat,
    getChats
}

