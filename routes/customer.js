const customerDomain = require('../domain/customer')

exports.createCustomer =(req, res, next)=>{
    const customerData = req.body;

    customerDomain.createCustomer(customerData)
    .then(customer=>{
        res.send(customer)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}
exports.getCustomerById = (req, res, next)=>{
    const customerId = req.params.customerid;
    console.log("routes", customerId)
    customerDomain.getCustomerById(customerId)
    .then(customer=>{
        res.send(customer)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}