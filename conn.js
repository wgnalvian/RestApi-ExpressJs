const mysql = require(`mysql`)


 conn = mysql .createConnection({
    host : `localhost`,
    user : `root`,
    password : ``,
    database : `restapi_expressjs`
})

conn.connect((e) => {
    if(e) return console.log(e)
    console.log(`Connection database succesfully`)
})



module.exports = conn