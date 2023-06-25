import express from "express";
import ToDoController from "../controller/toDoListController.js";
import endpoints from "../constants/endpoints.js";
const router = express();
const controller = new ToDoController(); 

router.get('/', controller.getAll)
router.get(endpoints.list, controller.getAll)
router.get(endpoints.getbyid, controller.getById);
router.get(endpoints.finished, controller.getFinished);
router.get(endpoints.notdone, controller.getNotDone);
router.delete(endpoints.delete, controller.deleteToDo);
router.post(endpoints.add, controller.addToDo);
router.post(endpoints.create, controller.addToDo);



export default router;