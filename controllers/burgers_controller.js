const express = require("express");
const burger = require("../models/burger");

const router = express.Router();
//
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});
//
router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burgerName, () => {
    res.redirect("/");
  });
});
//
router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, function () {
    res.sendStatus(200);
  });
});

module.exports = router;
