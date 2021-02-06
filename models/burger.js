const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    createOne(objColVals, condition, cb) {
      orm.createOne('burgers', objColVals, condition, (res) => cb(res));
    }
  };

module.exports = burger;