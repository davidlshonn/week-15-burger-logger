const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll((res) => cb(res));
    },
    insertOne(name, cb) {
      orm.insertOne(name, cb);
    },
    updateOne(id, cb) {
      orm.updateOne(id, cb);
    }
  };

module.exports = burger;