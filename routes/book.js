const bookDomain = require('../domain/book')

exports.createBook =(req, res, next)=>{
    const bookData = req.body;

    bookDomain.createBook(bookData)
    .then(book=>{
        res.send(book)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}
exports.getBookById = (req, res, next)=>{
    const bookId = req.params.bookid;
    console.log("routes", bookId)
    bookDomain.getBookById(bookId)
    .then(book=>{
        res.send(book)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}