require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    stripe = require('stripe')(process.env.SECRET_KEY),
    ctrl = require('./controllers/controllers');

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.post('/api/payment', function (req, res, next) {
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    console.log('amt', req.body.amount.toString().split(''));

    // Joe's penny function below
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") pennies.push(amountArray[i + 1]);
            else pennies.push("0");
            if (typeof amountArray[i + 2] === "string") pennies.push(amountArray[i + 2]);
            else pennies.push("0");
            break;
        }
        else pennies.push(amountArray[i]);
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create( // method built in to library
        {
            amount: convertedAmt, // amount in cents, again
            currency: 'usd',
            source: req.body.token.id, // needs to be the token id
            description: 'Test charge from react app' // any description you want
        },
        function (err, charge) {
            if (err) return res.sendStatus(500); // error means charge failure
            return res.sendStatus(200);
            // if (err && err.type === 'StripeCardError') {
            //   // The card has been declined
            // }
        });
});

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db');

    const { sub, name, picture } = profile._json;

    db.find_user([sub]).then(response => {
        if (response[0]) {
            done(null, response[0].id)
        } else {
            db.create_user([name, picture, sub]).then(response => {
                done(null, response[0].id)
            })
        }
    })

}));

passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    const db = app.get('db');
    db.find_logged_in_user([id]).then(res => {
        done(null, res[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_REDIRECT
}))

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('Not logged in.')
    } else {
        res.status(200).send(req.user);
    }
})

app.post('/api/adventures', ctrl.create);
// app.post('/api/adventures', ctrl.name);
app.get('/api/adventures', ctrl.read);

app.get('/api/adventures/:id', (req, res) => {
    console.log(req.params.id)
    const db = req.app.get('db');
    db.get_adv([req.params.id]).then(resp => {
        console.log(resp);
        res.status(200).send(resp);
    })
})

app.put('/api/adventures/:id', (req, res) => {
    console.log(req.body);
    const db = req.app.get('db');
    const { params, body } = req
    db.edit_adventure([params.id,
    body.location,
    body.title,
    body.date,
    body.description,
    body.image,
    body.latitud,
    body.longitud]).then(resp => {
        db.adventures.find().then(resp => {
            res.status(200).send(resp)
        })
    })
})

app.delete('/api/adventures/:id', ctrl.delete)

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect(process.env.REACT_APP_REDIRECT)
})




app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})