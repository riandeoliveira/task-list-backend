const Task = require("../models/task-model.js");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "error: " + error });
  }
};

const createTasks = async (req, res, next) => {
  try {
    const task = req.body;
    await new Task(task).save();

    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "error: " + error });
  }
};

const completeTasks = async (req, res, next) => {
  try {
    const { _id, completed } = req.body;
    await Task.updateOne({ _id }, { $set: { completed: !completed } });

    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "error: " + error });
  }
};

const renameTasks = async (req, res, next) => {
  try {
    const { _id, newName } = req.body;
    await Task.updateOne({ _id }, { $set: { name: newName } });

    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "error: " + error });
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const taskId = req.body._id;
    await Task.deleteOne({ _id: taskId });

    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "error: " + error });
  }
};

module.exports = {
  getTasks,
  createTasks,
  completeTasks,
  renameTasks,
  deleteTasks,
};
