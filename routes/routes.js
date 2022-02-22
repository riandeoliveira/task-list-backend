const express = require("express");
const controller = require("../controllers/task-controller.js");

const router = express.Router();

router.get("/", controller.getTasks);
router.post("/", controller.createTasks);
router.patch("/", controller.completeTasks);
router.put("/", controller.renameTasks);
router.delete("/", controller.deleteTasks);

module.exports = router;
