/*

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains').then(() => {
    console.log("Connected to Database")
}).catch((error) => {
    console.log("Not Connected to Database ERROR!", error);

});

var productSchema = mongoose.Schema({
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
})
*/
