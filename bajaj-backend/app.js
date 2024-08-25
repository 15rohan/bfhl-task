require('dotenv').config()
require('express-async-errors')

//security packages
const cors = require('cors')
const helmet = require('helmet')

const express = require('express')
const app = express()

//routers
const bfhlRouter = require('./routes/route')

//security
app.use(express.json())
app.use(helmet())
app.use(cors())

//routes
app.use('/api/v1/bfhl',bfhlRouter)

const port = process.env.PORT || 8080

const start = async () =>{
    try {
        app.listen(port, ()=> console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()