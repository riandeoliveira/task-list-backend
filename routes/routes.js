const express = require("express");
const controller = require("../controllers/task-controller.js");

const router = express.Router();

router.get("/api/get", controller.getTasks);
router.post("/api", controller.createTasks);
router.patch("/api", controller.completeTasks);
router.put("/api", controller.renameTasks);
router.delete("/api", controller.deleteTasks);

module.exports = router;
