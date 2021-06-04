const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const Person = require('./models/person');
const { nextTick } = require('process');

mongoose.connect('mongodb://localhost:27017/NewDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

    app.get('/names/new', (req, res) => {
        res.render('new.ejs')
    })    

app.get('/names',async (req, res) =>{
    const persons = await Person.find();
    res.render('index', {persons})
})

app.post('/names', async (req, res) => {
    const newuser = new Person(req.body);
    await newuser.save();
    // res.redirect(`/names/${newuser._id}`);
    res.render('thankyou')
})



app.get('/names/:id', async (req, res) => {
    const { id } = req.params;
    const person = await Person.findById(id)
    res.render('show', { person })
})




    app.listen(3000, () => {
        console.log("APP IS LISTENING ON PORT 3000!")
    })