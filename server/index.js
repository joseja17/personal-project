require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
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
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    
const db = app.get('db');

const {sub, name, picture } = profile._json;

db.find_user([sub]).then( response => {
    if (response[0]){
        done(null, response[0].id)
    }else{
        db.create_user([name, picture, sub]).then (response =>{
            done(null, response[0].id)
        })
    }
})

}));

passport.serializeUser( (id, done)=>{
    done(null, id);
})

passport.deserializeUser( (id, done)=>{
    const db = app.get('db');
    db.find_logged_in_user([id]).then(res => {
        done(null, res[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private'
}))

app.get('/auth/me', (req, res)=>{
    if(!req.user){
        res.status(404).send('Not logged in.')
    }else{
        res.status(200).send(req.user);
    }
})

app.post('/api/adventures', ctrl.create);
app.get('/api/adventures', ctrl.read);
app.delete('/api/adventures/:id', ctrl.delete);

app.get('/logout', (req, res)=>{
    req.logOut();
    res.redirect('http://localhost:3000/')
})




app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})