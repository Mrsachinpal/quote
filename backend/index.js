const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDb = require('./seed');
const quoteRoutes = require('./apis/quotesRoute');
const authApi = require('./apis/auth');
const userRoutes = require('./routes/auth');
const cors = require('cors');
const methodOverride = require('method-override')
const passport = require('passport')
const LocalStrategy = require('passport-local');
const session = require('express-session');
const cookieParser=require('cookie-parser');
const User = require('./model/User');
const multer = require('multer');   //handle upload file from form



mongoose.connect('mongodb://127.0.0.1:27017/onceagainquote').then(function () {
    console.log("Db connected !")
}).catch((e) => {
    console.log("Db not connected!");
})

app.use(cookieParser()); 

app.use(cors({
    origin: ["http://localhost:5173"]
}))


let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}
app.use(session(configSession));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(authApi);

// use static authenticate method of model in LocalStrategy
app.use(passport.initialize()); //password
app.use(passport.session());    //password
passport.use(new LocalStrategy(User.authenticate())); //password
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());   //password
passport.deserializeUser(User.deserializeUser());   //password

app.get('/', (req, res) => {
    res.status(200).json({ msg: "hello form root" })
})

// seedDb();

app.use(quoteRoutes);
app.use(userRoutes);

app.listen(8080, () => {
    console.log("server connected at port: 8080 !");
})