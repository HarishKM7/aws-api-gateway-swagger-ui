const express = require('express')
const serverless = require('serverless-http')
const swaggerUI = require('swagger-ui-express')

var options = {
    swaggerOptions: {
        url: process.env.SWAGGER_SPEC_URL
    }
}

const app = express()
app.use('/api-docs', swaggerUI.serve,
    swaggerUI.setup(null, options))

module.exports.handler = serverless(app)
