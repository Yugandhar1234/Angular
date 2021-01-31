const express = require('express');
const router = express.Router();

/*
  USAGE : Enroll a User
  URL : http://127.0.0.1:5000/user/enroll
  METHOD : POST
  Fields : name , email , password , course
 */
router.post('/enroll', (request , response) => {
  let enrollment = request.body;
  console.log(enrollment);
  response.status(200).json({
    msg : 'Enrollment is Successful'
  });
});

/*
  USAGE : Register a User
  URL : http://127.0.0.1:5000/user/register
  METHOD : POST
  Fields : name , email , password , course
 */
router.post('/register', (request , response) => {
  let enrollment = request.body;
  console.log(enrollment);
  response.status(200).json({
    msg : 'Registration is Successful'
  });
});

module.exports = router;
