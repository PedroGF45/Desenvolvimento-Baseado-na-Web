const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function (error) {
    if (error) {
        console.log('Error');
    }
    console.log('Server is running on port', 3000);
});

const homeRoute = require("../../routes/homeRoute");
const formRoute = require("../../routes/formRoute");

app.use(homeRoute);
app.use(formRoute);