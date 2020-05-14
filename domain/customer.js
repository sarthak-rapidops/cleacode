const customerDB = require('../db/customer')

exports.createCustomer = (customerData)=>{
    return new Promise((resolve, reject)=>{
        if(!customerData.name || !customerData.address || !customerData.age){
            reject("missing data")
            return
        }
        customerDB.saveCustomer(customerData)
        .then(customer=>{
            resolve(customer)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

exports.getCustomerById = (customerId)=>{
    console.log("domain",customerId)
    return new Promise((resolve, reject)=>{
        customerDB.getCustomerById(customerId)
        .then(customer=>{
            resolve(customer)
        })
        .catch(err=>{
            reject(err)
        })
    })
}