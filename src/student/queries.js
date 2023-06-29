const getAll = 'SELECT * FROM students';

//$1 is a variable and allows us to pass in a value when we go to use it
const getByID = 'SELECT * FROM students WHERE id = $1';

const checkEmail = 'SELECT * FROM students WHERE email = $1';

const createStudent =
  'INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)';

const delByID = 'DELETE FROM students WHERE id = $1';

module.exports = { getAll, getByID, checkEmail, createStudent, delByID };
