const express = require('express');
const app = express();
const dataModel = require('./model/dataModel');
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.connect(`${process.env.MONGODB}`)
.then(() => {
    console.log("connected");
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post('/post', async (req, res) => {
    const {name, email, message} = req.body;
    if(!name || !email || !message) {
        res.status(400).json({
            message : "enter all details"
        })
        return;
    }

    const newUser = await dataModel.create({
        name, 
        email, 
        message
    });

    if(!newUser) {
        res.status(400).json({
            message : "internal error"
        })
        return;
    }

    res.status(200).json({
        success : true,
        message : "Successfully send"
    })
})

app.listen(3000);
