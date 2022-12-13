const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json()); 
app.use(cors({
    origin : "*"
}));



module.exports = app;