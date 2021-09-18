const express = require('express')
const serverless = require('serverless-http')
const swaggerUI = require('swagger-ui-express')

const app = express()
app.use(
  '/swagger',
  swaggerUI.serve,
  swaggerUI.setup(null, {
    swaggerOptions: {
      url: process.env.SWAGGER_SPEC_URL
    }
  })
)

module.exports.handler = serverless(app)
