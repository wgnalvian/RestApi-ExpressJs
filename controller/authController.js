
const { getUserByEmail, createUserAccount } = require('../model/authModel')
const { ok, error } = require('../res')
const bytcrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../config/secrets')



const usersRegister = ( req, res) => {

    if(req.body.email && req.body.username && req.body.password) {
        
        getUserByEmail(req, (result) => {

            if(!result.length < 1) {

                error(" Email has been used ", res)

            } else {

                createUserAccount(req, (err, result) => {
                    err ? error(err, res) : ok("Succesfuly create account", res)
                })

            }

        })
            
        

    } else {

        error("Username, email, password required", res)
    }



}


const usersLogin = (req, res) => {

    getUserByEmail(req, (result) => {

        if(!result.length < 1) {
            

            bytcrpt.compare(req.body.password, result[0].password, (err, check) => {

                if(check) {

                 const token =  jwt.sign({id : result[0].id, role : result[0].role}, jwtSecret(),{ expiresIn : 500 })
                    
                 res.set('token', token)

                 ok("succesfully login", res)


                } else {

                    error("Password wrong !!", res)

                }

            })

        } else {

            error("Email tidak teregistrasi", res)

        }

    })

}

module.exports = { usersRegister, usersLogin }