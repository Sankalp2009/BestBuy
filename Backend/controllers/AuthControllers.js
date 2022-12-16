
require("./auth")


function isLoggedIn(req,res,next){


    req.user? next():res.sendStatus(401);
}

app.get("/",(req,res)=>{


    res.send('<a href="/auth/google">Authenticate with Google<a/>')
});


app.get("/auth/google",


   passport.authenticate("google",{scope:["email" , "profile"]})   
)


app.get('/google/callback',
passport.authenticate("google",{
    successRedirect:"/Protected",
    failureRedirect:"/auth/failure",
})  
)


exports.failure = (req,res)=>{
    res.send("Someting went wrong...")
}

exports.Protected = isLoggedIn,(req,res)=>{
    res.send(`Hello ${req.user.displayName}`)
}


exports.logout = (req,res)=>{
   
    req.session.destroy();
    res.send("Good By.....")
}
