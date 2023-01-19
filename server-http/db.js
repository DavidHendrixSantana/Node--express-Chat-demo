const db = require('mongoose');


db.Promise = global.Promise;


async function connect(url){
    await db.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>
        console.log('Conexión exitosa'))
        .catch(e=>{
            console.error(e)
        })

}

module.exports ={
    connect
}


