const bookDB = require('../db/book')

exports.createBook = (bookData)=>{
    return new Promise((resolve, reject)=>{
        if(!bookData.title || !bookData.author || !bookData.publisher || !bookData.pages){
            reject("missing data")
            return
        }
        bookDB.saveBook(bookData)
        .then(book=>{
            resolve(book)
        })
        .catch(err=>{
            reject(err)
        })
    })
}
exports.getBookById = (bookId)=>{
    console.log("domain",bookId)
    return new Promise((resolve, reject)=>{
        bookDB.getBookById(bookId)
        .then(book=>{
            resolve(book)
        })
        .catch(err=>{
            reject(err)
        })
    })
}