import * as express from "express";
import { CategoryController } from "../controllers/CategoryController"

const Router = express.Router();

// registramos rutas routes
Router.get("/categories", CategoryController.index)
Router.post("/categories", CategoryController.create)
Router.get("/categories/:id", CategoryController.read)
Router.put("/categories/:id", CategoryController.update)
Router.patch("/categories/:id", CategoryController.patch)
Router.delete("/categories/:id", CategoryController.delete)

export { Router as categoryRouter };