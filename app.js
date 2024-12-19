
// importing the librarires 

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const postRoutes = require('./routes/post');
app.use('/api/posts', postRoutes);



// we connect the database to app.js through the url from mongodb
MURL = 'mongodb+srv://student:<db_password>@cluster0.vmktv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MURL, ()=>{
    console.log('your mongodb connector is on')
})

app.listen(3000, () => console.log('Server running on port 3000'));

