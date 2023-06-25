import Task from "../model/task.js";

class TaskService {
    async getAll() {
        return await Task.find({});
    }

    async addTask(task) {
        return await Task.insertMany(task);
    }

    async delete(id) {
        return await Task.deleteOne({"_id" : id});
    }
}

export default TaskService;
