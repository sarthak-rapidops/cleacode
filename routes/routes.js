const book = require('./book')
const customer = require('./customer')
const  order = require('./order')

exports.assignRoutes= (app)=>{
    app.post('/book', book.createBook)
    app.get('/book/:bookid',book.getBookById)
    app.post('/customer',customer.createCustomer)
    app.get('/customer/:customerid',customer.getCustomerById)
    app.post('/order',order.addOrder)
    app.get('/order/:orderid', order.getOrderById)
}