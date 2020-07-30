const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const helmet = require('helmet')



const app = express();

connectDB();

//Init Middleware
app.use(express.json({extended:false}));

 
//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors())
app.use(helmet())
app.use(logger('dev'))

app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))

// //Postman test
app.get('/',(req,res) => 
    res.send('API runnning')); 


//import routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;







app.listen(PORT, () => console.log(`Server running on ${PORT}`))




