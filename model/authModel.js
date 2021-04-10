const conn = require('../conn')
const bycrpt = require('bcrypt')

const getUserByEmail = (req, result) => {

    conn.query('SELECT * FROM users WHERE email = ?',[req.body.email],(err, res) => {
        
        result(res)
        
    })
}

const createUserAccount = (req, result) => {

    let { username, email, password } = req.body
    bycrpt.hash(password, 10, (err, hash) => {
       
        conn.query('INSERT INTO users ( username, email, password, created_at ) VALUES  (?, ?, ?, ?)',[username, email, hash, new Date()], (err, res) => {
    
         err ? result(err, null) : result(null, res)
    
        })
    })


}


module.exports = { getUserByEmail, createUserAccount }