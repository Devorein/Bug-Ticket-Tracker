// const router = require("express").Router();
// const projectController = require("../../controllers/projectController");
// const authorization = require("../../middleware/authorization");

import { Router } from "express";
import { projectController } from "../../controllers/projectController";
import { authorization } from "../../middleware/authorization";

const router = Router();


// Matches route with "/api/v1/projects/"
router
  .route("/")
  .get(
    // authorization,
    projectController.getAll
  )
  .post(authorization, projectController.createProject);

router
  .route("/:id")
  .get(authorization, projectController.getProject)
  .put(authorization, projectController.updateProject)
  .delete(authorization, projectController.deleteProject);

module.exports = router;
