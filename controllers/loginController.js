const { query } = require('express');
const bcrypt = require('bcrypt');

const Login = require('../models/loginModel');
const Register = require('../models/registerModel');
module.exports = {
    get: (req,res)=>{
        res.send("Hello get")
    },
    post: (req,res)=>{
        const login = new Login({
            emailId: req.body.emailId,
            password: req.body.password
        })
        Register.findOne(
            {emailId : {$regex : login.emailId}}
            )
            .then(data => {
                bcrypt.compare(login.password, data.password, function(err, result) {
                    if(result)
                    {
                        res.send("Sucess Login")
                    }
                    else{
                        res.send("Invalid Credentials")
                    }
                });
                
            })
    }
}