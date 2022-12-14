const express = require('express');
const app = express();
const cors = require('cors');
const UserRouter = require('./routes/UserRoutes')

app.use(express.json()); // JSON Middleware 
app.use(cors({
    origin : "*"
}));

app.use('/api/v1/users',UserRouter); //ParentRoute

app.all("*",(req,res,next)=>{
    res.status(400).json({
        status : "Fail",
        message :`Can't find this ${req.originalUrl} on this server`

    })
    next();
})
module.exports = app;
