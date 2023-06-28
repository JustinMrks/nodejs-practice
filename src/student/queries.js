const getAll = 'SELECT * FROM students';

//$1 is a variable and allows us to pass in a value
const getByID = 'SELECT * FROM students WHERE id = $1';

const checkEmail = 'SELECT * FROM students WHERE email = $1';

const createStudent = '';

module.exports = { getAll, getByID, checkEmail, createStudent };
