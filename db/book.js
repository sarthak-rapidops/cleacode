const db_tools = require('../tools/db_tools')
const mongoose = require('mongoose')

const db = db_tools.DBConnect()

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author:
    {
        type: String,
        require:true
    },
    publisher:{ 
        type: String,
        require: true
    },
    pages:{
        type: Number,
        require: true
    } 
})

const Book = mongoose.model("book", BookSchema)

exports.Book = Book;
exports.saveBook = (bookdata)=>{
    const book = new Book(bookdata)
    return new Promise((resolve, reject)=>{
        book.save()
        .then(book=>{
            console.log("Book saved")
            resolve(book)
        })
        .catch(err=>{
            console.log(err)
            reject(book)
        })
    })
}

exports.getBookById = (bookId)=>{
    console.log(bookId)
    return new Promise((resolve, reject)=>{
        Book.findById({_id:bookId})
        .then(book=>{
            resolve(book)
        })
        .catch(err=>{
            reject(err)
        })
    })
}