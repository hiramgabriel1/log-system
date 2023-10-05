import { Router } from "express";
import controllersData from "../controllers/data.controllers.js";

const controllers = new controllersData("testing");
const path = "/api/v1";
const routerDataCreate = Router();

// TODO: endpoint to get all tasks
routerDataCreate.get(`${path}/`, (req, res) => {
  controllers.getTasks(req, res);
});

// TODO: endpoint to get task by title
routerDataCreate.get(`${path}/:title`, (req, res) => {
  controllers.searchByTitleTask(req, res);
});

// TODO: endpoint to delete task
routerDataCreate.delete(`${path}/delete/:id`, (req, res) => {
  controllers.deleteTask(req, res);
});

// TODO: endpoint to create a new post
routerDataCreate.post(`${path}/create`, (req, res) => {
  controllers.createTask(req, res);
});

// TODO: update a task
routerDataCreate.put(`${path}/:id`, (req, res) => {
  controllers.updateTask(req, res);
});

export default routerDataCreate;
