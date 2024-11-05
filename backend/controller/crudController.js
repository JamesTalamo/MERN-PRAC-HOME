let { product } = require('../model/product.js')

let addProduct = (req, res) => {
    let { name, price } = req.body
    console.log(name, price)
    res.status(200).send({ success: true, message: 'done!' })
}

module.exports = {
    addProduct
}