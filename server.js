const express = require('express');
const connectDB = require('./config/connection');
//const path = require('path');

const app = express();

connectDB();

app.get('/',(req,res) => {
    res.send('API runnning')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on 5000'))




