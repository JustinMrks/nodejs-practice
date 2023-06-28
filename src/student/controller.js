const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
  pool.query(queries.getAll, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getByID, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const createStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  //check for a valid email before you try to create new
  pool.query(queries.checkEmail, [email], (err, result) => {
    if (result.rows.length) res.send('Email already in use');
    //if email not in use
  });
};

module.exports = { getStudents, getStudentById, createStudent };
