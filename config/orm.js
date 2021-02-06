// Import MySQL connection.
const connection = require("./connection");

// Function for SQL syntax to add question marks in query
function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

const objToSql = (object) => {
    const arr = [];

    for (const key in object) {
        let value = object[key];

        if (Object.hasOwnProperty.call(object, key)) {
         if (typeof value === 'string' && value.indexOf('') >= 0) {
            value =  `'${value}'`;
         }

         arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
};

// Object for all our SQL statement functions.
const orm = {
    selectAll(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    insertOne(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table}`;
  
      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += ') ';
  
      console.log(queryString);
  
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    updateOne(table, objColVals, condition, cb) {
      let queryString = `UPDATE ${table}`;
  
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;
  
      console.log(queryString);

      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

// Export the orm object for the model (.js).
module.exports = orm;