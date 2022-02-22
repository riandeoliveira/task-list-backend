const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      required: true,
    },
  },

  { versionKey: false }
);

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
