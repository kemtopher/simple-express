var express = require("express");
var router = express.Router();
var data = require("../data-store");
var projects = data.getProjects();

/* GET home page. */
router.get("/", (req, res) => {
  return res.status(404).json({ message: "Nothing here ..." });
});

router.get("/projects", (req, res) => {
  res.send(projects);
});

module.exports = router;
