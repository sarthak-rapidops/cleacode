const db_tools = require('../tools/db_tools')
const mongoose = require('mongoose')

const db = db_tools.DBConnect()

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require :true
    },
    age: {
        type: Number,
        require: true
    }
})

const Customer = mongoose.model("customer", CustomerSchema)

exports.Customer = Customer
exports.saveCustomer = (customerdata)=>{
    const customer = new Customer(customerdata)
    return new Promise((resolve, reject)=>{
        customer.save()
        .then(customer=>{
            console.log("Customer saved")
            resolve(customer)
        })
        .catch(err=>{
            console.log(err)
            reject(customer)
        })
    })
}

exports.getCustomerById = (customerId)=>{
    return new Promise((resolve, reject)=>{
        Customer.findById({_id: customerId})
        .then(customer=>{
            resolve(customer)
        })
        .catch(err=>{
            reject(err)
        })
    })
}