const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function (error) {
    if (error) {
        console.log('Error');
    }
    console.log('Server is running on port', 3000);
});

const homeRoute = require("../../routes/homeRoute");
const formRoute = require("../../routes/formRoute");
const fetchRoute = require("../../routes/fetchRoute");

app.use(homeRoute);
app.use(formRoute);
app.use(fetchRoute);