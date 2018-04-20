const boutiqueModels = require('../models/boutiqueFunctions');

const boutiqueRouter = require('express').Router();

function getAllProducts(req, res, next) {
  console.log('Listing all items in Product Table');
  bouti.listAllProducts()
  .then(data => {
    console.log('There are  ' + data.length + ' students in Hogwarts. ');
    res.locals.students = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneStudent(req, res){
console.log(req.params);
  studentsMods.findOneStudent(req.params.id)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      student: data
    });
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

function createStudent(req, res){
console.log(req.body);
  studentsMods.addStudent(req.body)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      student: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })

  })
}

function updateStudent(req, res){
 req.body.id = req.params.id;
  console.log(req.body);
  studentsMods.updateStudent(req.body)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      student: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

function destroyStudent(req, res){
  console.log(req.params);
  houseMods.destroyStudent(req.params.id)
  .then(() => {
    console.log(data);
    res.json({
      status: 'ok',
      message: `Deleted student record with id ${req.params.id}`
    });
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

function showStudentError(err, req, res, next) {
  res.status(500).json({
    status: 'error',
    message: err.message
  });
}

module.exports = {
getAllStudents,
getOneStudent,
createStudent,
updateStudent,
destroyStudent,
showStudentError

}
