const orderDomain = require('../domain/order')

exports.getOrderById = (req, res, next)=>{
    const orderId = req.params.orderid;
    console.log("routes",orderId)

    orderDomain.getOrderById(orderId)
    .then(order=>{
        res.send(order)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}

exports.addOrder =(req, res, next)=>{
    const orderData = req.body;
    // let bookId = mongoose.Types.ObjectId(orderData.bookId)
    //     let customerId = mongoose.Types.ObjectId(orderData.customerId)
    //     let deliveryDate = orderData.deliveryDate
    //     console.log("bookID", bookId)
    //     console.log("custID", customerId)
    //     console.log("date", deliveryDate)
    //     const orderDeatails ={
    //     bookId,
    //     customerId,
    //     deliveryDate
    // }   
    console.log("details", orderData)      
    orderDomain.addOrder(orderData)
    .then(order=>{
        res.send(order)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}