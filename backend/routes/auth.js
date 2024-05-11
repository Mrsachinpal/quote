const express = require('express');
const User = require('../model/User');
const router = express.Router();
const passport = require('passport')

router.post('/login/register', async (req, res) => {
    try {
        let { email, name, username, password } = req.body;
        let user = new User({ email, name, username });
        let newUser = await User.register(user, password);
        console.log("axios chala or backend tak aaya")
        res.redirect('/');
    }
    catch (e) {
        res.status(500).send(e);
    }
})
router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            console.log(`${user} user logged in `)
            return res.send('Valid user');
        });
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Error logging out:", err);
            return res.status(500).send("Error logging out");
        }
        console.log("User logged out");
        res.send("Logged out successfully");
    });
});



module.exports = router