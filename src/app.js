const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Connecting to db
mongoose.connect('mongodb://localhost/crud-movie')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3600);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile); change the ejs for the extension html, it works the same

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);

// starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 