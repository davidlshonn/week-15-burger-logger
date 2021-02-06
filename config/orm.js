// Import MySQL connection.
const connection = require("./connection");

// Object for all our SQL statement functions.
const orm = {
  selectAll(cb) {
    const queryString = `SELECT * FROM burgers;`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne(name, cb) {
    let queryString = `INSERT INTO burgers (burger_name) VALUES ('${name}');`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne(id, cb) {
    let queryString = `UPDATE burgers SET devoured = true WHERE id = ${id}; `;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (.js).
module.exports = orm;
