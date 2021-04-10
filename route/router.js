const express = require(`express`);
const jwtSecret = require('../config/secrets');
const router = express.Router();
const {getStudents, getStudent, postStudent, putStudent, deleteStudent} = require('../controller/controller')
const jwt = require('jsonwebtoken')
const { error } = require('../res')


router.use((req,res,next) => {

  let token = req.headers['authorization']
  token = token.split(' ')[1]
  jwt.verify(token,jwtSecret(),(err, decode) => {

  if(err) error(err, res)
  
    next() 
  })

})

router.get("/api/students", (req, res) => {

  getStudents(req, res)
});

router.get("/api/student/:id", (req, res) => {
  getStudent(req, res)
  
});

router.post("/api/student", (req, res) => {  
  postStudent(req,res)
})

router.put("/api/student/:id", (req, res) => {
  putStudent(req, res)
})

router.delete("/api/student/:id", ( req, res) => {
  deleteStudent(req, res)
})

module.exports = router;
