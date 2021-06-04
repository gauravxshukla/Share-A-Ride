const mongoose = require('mongoose');
const Person = require('./models/person');

mongoose.connect('mongodb://localhost:27017/NewDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })		

const users = [
    {
        name: 'Sandhya Kulkarni',
        address: '90 -A, Shanti Bhavan, Nehru Nagar, Nagpur',
        pincode: 440017,
        phone: 8555035991
    },
    {
        name: 'Bharat Chaudhri',
        address: 'B-2, 105 Unique House, Chakala Road, Agarwal Udyog Nagar,Sadar ,Nagpur',
        pincode:440002,
        phone: 9455588875
    },
    {
        name: "Padmini D'Cruze",
        address: '78 ,  Sucheta Niwas, S B S Road, Near Gpo , Nagpur',
        pincode:440003,
        phone: 7555358978
    },
    {
        name: 'Amarjeet Joshi',
        address: 'Narottam Niwas, Sion Main Rd, Sion,Nagpur',
        pincode:440004,
        phone: 7555153968
    },
]

Person.insertMany(users)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })