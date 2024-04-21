const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const mongoose = require('mongoose');
const methodOverride = require('method-override');

const passport = require("passport");
const localStrategy = require("passport-local");

io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("chat", function (msg) {
        const paraCliente = {
            socketID: socket.id,
            mensagem: msg,
        };
        io.sockets.emit("clientChat", paraCliente); //everybody and me
    });
});
    
mongoose
 .connect(
    "mongodb+srv://mongo:hOpUEjD1mVlOUogx@testdb.quoisku.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then(() => {
    console.log("Connected");
    })
    .catch((err) => {
    console.log(err);
 });


app.set('view engine', 'ejs');
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/SocketExample',express.static('public/js/SocketExample'));
app.use('*/images',express.static('public/images'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//Express-session middleware. Guarda a sessão do utilizador no lado do servidor
app.use(
    session({
        secret: "your-secret-key", //é usado para encriptar dados da sessão
        resave: false,
        saveUninitialized: false,
    })
);
//PASSPORT CONFIG//////
app.use(passport.initialize()); //inicializa passport
app.use(passport.session()); //Irá aceder a sessão do cliente guardado no “session-express”. 
passport.use(new localStrategy(user.authenticate())); //Authenticate é adicionado automaticamente pelo plugin
passport.serializeUser(user.serializeUser()); //guarda um utilizador na sessão
passport.deserializeUser(user.deserializeUser()); //retira um utilizador na sessão

app.listen(3000, function (error) {
    if (error) {
        console.log('Error');
    }
    console.log('Server is running on port', 3000);
});

const homeRoute = require("../../routes/homeRoute");
const formRoute = require("../../routes/formRoute");
const fetchRoute = require("../../routes/fetchRoute");
const socketRoute = require("../../routes/socketRoute");
const userRouter = require("../../routes/userRoute");

app.use(homeRoute);
app.use(formRoute);
app.use(fetchRoute);
app.use(socketRoute);
app.use(userRouter);