const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');



const app = express();

connectDB();

//test Postman
// app.get('/',(req,res) => {
//     res.send('API runnning')
// }) 


//import routes here
app.use('/API/users', require('./routes/API/users'));
app.use('/API/auth', require('./routes/API/auth'));
app.use('/API/profile', require('./routes/API/profile'));
app.use('/API/posts', require('./routes/API/posts'));


//Init Middleware
app.use(express.json({extended:false}));

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors())
app.use(logger('dev'))

app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`))




