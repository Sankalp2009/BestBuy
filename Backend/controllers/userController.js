const {User} = require('./../Model/UserModel');

const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

exports.SignUp = async (req, res) => {
    console.log(req.body)
    const {first_Name, last_Name, mobile_number,email, password,confirm} = req.body;
    const userPresent = await User.findOne({email})

    if(userPresent?.email){
        res.send({"msg": "User already exist"})
    }
    else{
        try{
            bcrypt.hash(password, 4, async function(err, hash) {
                const user = new User({first_Name,last_Name,mobile_number,email,password:hash,confirm:hash})
                console.log(user);
                await user.save()
                res.send({"msg":"Sign up successfull"})
            });
           
        }
       catch(err){
            console.log(err)
            res.send({"err":"Something went wrong, pls try again later"})
       }
    }
    
}



exports.Login =  async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.find({email})
         
      if(user.length > 0){
        const hashed_password = user[0].password;
        bcrypt.compare(password, hashed_password, function(err, result) {
            if(result){
                const token = jwt.sign({"userID":user[0]._id}, 'hush');
                res.send({"msg":"Login successfull","token" : token})
            }
            else{
                res.send({"err":"Invalid Password"})
            }
      })} 
      else{
        res.send({"err": "Invalid email Id"})
      }
    }
 
    catch{
        res.send("Something went wrong, please try again later")
    }
}

