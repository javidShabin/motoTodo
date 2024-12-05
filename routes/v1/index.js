const express = require('express')
const { taskRouter } = require('./taskRoter')
const v1Router = express.Router()

v1Router.use("/item", taskRouter)

module.exports = {v1Router}