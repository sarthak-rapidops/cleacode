const express = require('express')
const bodyparse = require('body-parser')

const db_tools = require('./tools/db_tools')

const app = express();

db_tools.DBConnect()
.then(()=>{
    const routes = require('./routes/routes')

    app.use(bodyparse.urlencoded({extended:true}))
    app.use(bodyparse.json())

    routes.assignRoutes(app)
    app.listen(3000)
    console.log('running on port 3000')
})
.catch(err=>{
    console.log(err)
})