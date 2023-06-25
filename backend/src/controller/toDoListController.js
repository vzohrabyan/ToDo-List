import TaskService from "../service/taskService.js";

const taskService = new TaskService();
class ToDoController {
    async getAll(req, res) {
        if (true)
            throw new Error("TEST MIDDLEWARE");
        res.status(200).json(await taskService.getAll());
    }

    async getById(req, res) {

    }

    async updateToDo(req, res) {

    }

    async deleteToDo(req, res) {
        const id = req.body.id;
        console.log(id);
        console.log(await taskService.delete(id));
        res.status(200).send("okay");

    }

    async addToDo(req, res) {
        const task = req.body;
        const added = await taskService.addTask(task);
        res.status(200).send(added);
    }

    async getNotDone(req, res) {

    }

    async getFinished(req, res) {

    }
}

export default ToDoController;