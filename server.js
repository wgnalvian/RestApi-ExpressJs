const express = require('express')
const app = express()
const router = require('./route/router')
const auth = require('./route/auth')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(auth).use(router)



app.listen(process.env.PORT || 3000, (e) => {
    if(e) throw console.log(e)
    console.log(`Server running in port 3000`)
})