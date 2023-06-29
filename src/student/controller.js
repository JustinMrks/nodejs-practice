const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
  pool.query(queries.getAll, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const getStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getByID, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const createStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  // check for a valid email before you try to create new
  pool.query(queries.checkEmail, [email], (err, result) => {
    if (result.rows.length) res.send('Email already in use');
    // if email not in use, create user
    else {
      pool.query(
        queries.createStudent,
        [name, email, age, dob],
        (err, results) => {
          if (err) throw err;
          res.status(201).json('successfully created user');
        }
      );
    }
  });
};

const editStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getByID, [id], (err, results) => {
    if (!results.rows.length) {
      res.send(`no user found with id: ${id}`);
    } else {
      pool.query(queries.editStudent, [name, id], (err, result) => {
        if (err) throw err;
        res.send(`Updated user with id: ${id} successfully`);
      });
    }
  });
};

const delStudentByID = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getByID, [id], (err, results) => {
    if (!results.rows.length) {
      res.send(`no user found with id: ${id}`);
    } else {
      pool.query(queries.delByID, [id], (err, result) => {
        if (err) throw err;
        res.send(`Successfully deleted user with id: ${id}`);
      });
    }
  });
};

module.exports = {
  getStudents,
  getStudentByID,
  createStudent,
  editStudent,
  delStudentByID,
};
