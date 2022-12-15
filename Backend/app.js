const express = require('express');
const passport=require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const googleClientapi="822894406741-fvi08vfbufgj9nol3gqefrue0bktjt7m.apps.googleusercontent.com";
const googleClientSecret="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"
const app = express();
const cors = require('cors');
const UserRouter = require('./routes/UserRoutes')
const ProductRouter = require('./routes/ProductRoutes')
const GoogleRouter = require('./Routes/GoogleRoutes')

app.use(express.json()); // JSON Middleware 
app.use(cors({
    origin : "*"
}));

app.use('/api/v1/users',UserRouter); //ParentRoute
app.use('/api/v1/Products',ProductRouter); 
app.use('/api',GoogleRouter); 

passport.use(new GoogleStrategy({
    clientID:     googleClientapi,
    clientSecret: googleClientSecret,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  
      return done(null, profile);
   
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
});


passport.deserializeUser(function(user,done){
  done(null,user)
});
app.all("*",(req,res,next)=>{
    res.status(400).json({
        status : "Fail",
        message :`Can't find this ${req.originalUrl} on this server`

    })
    next();
})
module.exports = app;
