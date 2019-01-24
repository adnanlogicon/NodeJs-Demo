const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const path = require('path');

const mysql = require('mysql');
const usersRouter = require('./routes/api/v1/users');

const app = express();


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '12345',
    database: 'jetbrains'

});


con.connect(function (err) {
    if (err) console.log("Excetion thrown",err);
    console.log("Connected!");
    /*con.query("CREATE DATABASE jetbrains", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });*/
});
global.con = con;
const port = 5000;


// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
//app.use(fileUpload()); // configure fileupload


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
// for parsing application/json
//app.use(express.json());
//app.use('/api/v1/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
