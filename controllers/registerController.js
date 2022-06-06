const Register = require('../models/registerModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    get: (req,res)=>{
        res.send("Hello get")
    },
    post: (req,res)=>{
        
        const register = new Register({
            name: req.body.name,
            emailId : req.body.emailId,
            phoneNo : req.body.phoneNo,
            address : req.body.address,
            password: req.body.password
        })
        register.save().then(result=>{
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                Register.updateOne({emailId:result.emailId},{$set : {password:hash}}).then(resp=>{
                    console.log(resp);
                })
            })
            res.send(`Sucess ${result}`);
        });
    }
}