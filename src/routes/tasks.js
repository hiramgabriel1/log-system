import { Router } from "express";
import controllersData from "../controllers/data.controllers.js";

const controllers = new controllersData("testing");
const path = "/api/v1";
const routerDataCreate = Router();

routerDataCreate.get(`${path}/:username`, (req, res) => {
  controllers.getTasks(req, res);
});

routerDataCreate.post(`${path}/create`, (req, res) => {
  controllers.createTask(req, res);
});

export default routerDataCreate;
