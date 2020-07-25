const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const helmet = require('helmet')


//import routes here

const app = express();

connectDB();

// view engine 

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))



//Postman test
/* app.get('/',(req,res) => {
    res.send('API runnning')
}) */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`))




