const express = require('express')
const auth =  express.Router()
const { usersRegister, usersLogin } = require('../controller/authController')

auth.get('/api/register', (req, res) => {
    usersRegister(req, res)
})

auth.get('/api/login', (req, res) => {
    usersLogin(req, res)
})
module.exports = auth