const db_tools = require('../tools/db_tools')
const mongoose = require('mongoose')

const db = db_tools.DBConnect()

const OrderSchema = new mongoose.Schema({
    CustomerId:{
        type:mongoose.Schema.ObjectId,
        require:true
    },
    BookId:{
        type:mongoose.Schema.ObjectId,
        require:true
    },
    initialDate:{
        type:Date,
        require:true
    },
    deliveryDate:{
        type:Date,
        require:true
    }
})

const Order = mongoose.model("order", OrderSchema)

exports.Order = Order
exports.saveOrder = (orderData)=>{
    //console.log("db",orderData)
    // const bookId = orderData.bookId
    // const customerId = orderData.customerId
    // const deliveryDate = orderData.deliveryDate
    // console.log(bookId)
    // console.log(customerId)
    // console.log(deliveryDate)
    console.log("orderdata",orderData)
    const order = new Order(orderData)
    // console.log(order.bookId)
    // console.log(order.customerId)
    // console.log(order.deliveryDate)
    console.log("db",order)
    return new Promise ((resolve, reject)=>{
        order.save()
        .then(order=>{
            console.log("Order saved")  
            resolve(order)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

exports.getOrderById = (orderId)=>{
    console.log(orderId)
    return new Promise((resolve, reject)=>{
        Order.findById({_id:orderId})
        .then(order=>{
            resolve(order)
        })
        .catch(err=>{
            reject(err)
        })
    })
}