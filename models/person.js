const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true,
    },
    pincode: {
        type: Number,
        // required: true
    },
    phone: {
        type: Number,
        // required: true
    }
})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;