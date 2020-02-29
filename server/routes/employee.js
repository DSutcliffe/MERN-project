const express = require('express');
const employeeRouter = express.Router();
const employee = require('../model/employee');

//CRUD

//Create
employeeRouter.post('/', (req, res) => {
  const employee = new employee(req.body);
  employee.save((err, document) => {
    if(err)
      res.status(500).json({message:{
        msgBody: "Unable to add employees",
        msgError: true
      }}) 
    else
      res.status(200).json({message:{
        msgBody: "Successfully Added Employee",
        msgError: false
      }});
  });
});

//Read
employeeRouter.get('/', (req, res) => {
  employee.find({}, (err, response) => {
    if(err)
      res.status(500).json({message:{
        msgBody: "Unable to get employees",
        msgError: true
      }}) 
    else
      res.status(200).json(response);
  });
});

//Update
employeeRouter.put('/', (re, res) => {
  employee.findOneAndUpdate(req.params.id, req.body, {runValidators: true}, (err, response) => {
    if(err)
      res.status(500).json({message:{
        msgBody: "Unable to update employees",
        msgError: true
      }}) 
    else
      res.status(200).json({message:{
        msgBody: "Successfully Updated Employee",
        msgError: false
      }});
  })
});

//Delete
employeeRouter.delete('/', (req, res) => {
  employee.findByIdAndDelete(req.params.id, err => {
    if(err)
      res.status(500).json({message:{
        msgBody: "Unable to delete employees",
        msgError: true
      }}) 
    else
      res.status(200).json({message:{
        msgBody: "Successfully Deleted Employee",
        msgError: false
      }});
  });
});

module.export = employeeRouter;