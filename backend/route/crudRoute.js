const express = require('express')
const Router = express.Router()
const crudController = require('../controller/crudController')

Router.get('/', crudController.addProduct)

module.exports = Router