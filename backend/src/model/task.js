import mongoose from "mongoose";

const TaskSchema = {
    title : String,
    isDone : Boolean,
    isHidden : Boolean
}

const Task = mongoose.model('Task', TaskSchema);

export default Task;