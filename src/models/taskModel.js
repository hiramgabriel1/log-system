import mongoose from "mongoose";

const model = new mongoose.Schema(
  {
    title: {
        type: "String",
        require: true
    },
    
    desc: {
        type: "String",
        require: true
    },

    required: {
        type: Boolean,
        require: false
    }
  },
  {
    timestamps: true,
  }
);

const taskModel = mongoose.model("tasks", model);

export default taskModel;