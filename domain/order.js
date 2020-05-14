const orderDB = require('../db/order')
const bookDB = require('../db/book')
const customerDB = require('../db/customer')
const bookDomain = require('./book')
const customerDomain = require('./customer')

exports.getOrderById = (orderId) =>{
    console.log("domain",orderId)
    return new Promise((resolve, reject)=>{
        orderDB.getOrderById(orderId)
        .then(order=>{
            resolve(order)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

exports.getBooks = (order)=>{
    return new Promise((resolve, reject)=>{
        bookDB.getBookById(order.bookId)
        .then(book=>{
            resolve(book)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

exports.getCustomers = (order)=>{
    return new Promise((resolve, reject)=>{
        customerDB.getCustomerById(order.customerId)
        .then(customer=>{
            resolve(customer)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

exports.addOrder = (orderData)=>{
    console.log("domain", orderData)
    return new Promise((resolve, reject)=>{
        if(!orderData.deliveryDate) {
            reject('missing data')
        }         
        orderDB.saveOrder(orderData)
        .then(order =>{
            resolve(order)
        })
        .catch(err=>{
            reject(err)
        })
    })
}