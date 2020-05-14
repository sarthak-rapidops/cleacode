const mongoose = require('mongoose')

let db;

exports.DBConnect = ()=>{
    return new Promise((resolve, reject)=>{
        if(db){
            return db
        }
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb+srv://sarthak-rapidops:sarthak@rapidops-0d1fa.mongodb.net/clencode?retryWrites=true&w=majority')
        .then(()=>{
            console.log('connection created')
            resolve(db)
        })
        .catch(err=>{
            console.log(err)
            reject(db)
        })
    })
}