var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    customerfirstname: {
        type : String,
        required: true,
        unique : true
    },
    customerlastame: {
        type : String,
        required: true
    },
    customerAddress: {
        customerCity: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }    
});

const customer = new mongoose.model("customer",customerSchema);

module.exports = customer;