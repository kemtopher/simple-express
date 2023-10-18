var express = require("express");
var router = express.Router();
var data = require("../data-store");
var projects = data.getProjects();

router.get("/active", function (req, res) {
  var newArr = projects.filter((project) => {
    return project.isActive;
  });

  if (newArr.length === 0) {
    return res.status(400).json({ message: "Currently no active projects" });
  }
  return res.send(newArr);
});

router.get("/:id", (req, res) => {
  var id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID parameter must be a number" });
  } else {
    var singleProj = projects.filter((proj, err) => {
      return proj.id === parseInt(req.params.id);
    });

    if (singleProj.length === 0) {
      return res.status(400).json({ message: "No projects found" });
    }

    return res.send(singleProj);
  }
});

module.exports = router;
