const express = require("express");
const burger = require("../models/burger");

const router = express.Router();
//
router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
//
  router.post('/api/burgers', (req, res) => {
    burger.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], (result) => {

        res.json({ id: result.insertId });
    });
  });
//
  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.update(
      {
        sleepy: req.body.sleepy,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });