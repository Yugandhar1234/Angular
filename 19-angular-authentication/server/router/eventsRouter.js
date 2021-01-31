const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authenticate = require('../middlewares/authenticate');

/*
  USAGE : Get all the FREE Events
  URL : http://127.0.0.1:5000/events/free
  METHOD : GET
  FIELDS : no-fields
 */
router.get('/free' , async (request , response) => {
  try {
      let freeEvents = await Event.find({ type : 'FREE'});
      response.status(200).json(freeEvents);
  }
  catch (err) {
    console.error(err);
    response.status(500).json({msg : err.message});
  }
});

/*
  USAGE : Get all the PRO Events
  URL : http://127.0.0.1:5000/events/pro
  METHOD : GET
  FIELDS : no-fields
 */
router.get('/pro' , authenticate ,  async (request , response) => {
  try {
    let proEvents = await Event.find({ type : 'PRO'});
    response.status(200).json(proEvents);
  }
  catch (err) {
    console.error(err);
    response.status(500).json({msg : err.message});
  }
});

/*
  USAGE : Upload Events
  URL : http://127.0.0.1:5000/events/upload
  METHOD : POST
  FIELDS : name , image , date , price , info , type
 */
router.post('/upload', async (request, response) => {
  try {
    let newEvent = {
      name : request.body.name,
      image : request.body.image,
      date : request.body.date,
      info : request.body.info,
      type : request.body.type
    };
    // get the price based on the type of event
    newEvent.price = (request.body.type === 'FREE') ? 0 : request.body.price;
    let event = new Event(newEvent);
    event = await event.save(); // insert a record to database
    response.status(200).json({
      result : 'Upload Success',
      event : event
    });
  }
  catch (err) {
    console.error(err);
    response.status(500).json({msg : err.message});
  }
});

module.exports = router;
