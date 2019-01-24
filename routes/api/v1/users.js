const express = require('express');
const router = express.Router();



/*var productSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Product = mongoose.model('Product', productSchema);

var product = new Product({name: "Webstorm", age: 1, nationality: "Pakistani"});
product.save(function (err) {
    if (err) {
        console.log("failed")
    } else {
        console.log("Product saved succesfully")
    }
});*/

/* GET product listing. */
router.get('/', function (req, res) {
    Product.find(function (err, products) {
        res.json({
            error: false,
            message: "Data fetched succesfully",
            data: products
        });

    })
});

/* GET product by id */
var mysort = {age: -1};
router.get('/:age', function (req, res) {
    Product.findOne(function (err, products) {
        res.json({
            error: false,
            message: "Data fetched succesfully",
            data: products
        });
    }).reverse()
});

/* GET users listing. */
router.post('/add', function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var nationality = req.body.nationality;
    var product = new Product({name: name, age: age, nationality: nationality});
    product.save(function (err) {
        res.send(product);
    })
});

module.exports = router;
