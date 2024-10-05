import * as express from "express";
import { Request, Response } from "express"
// import { UserController } from "../controllers/UserController"
import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

const Router = express.Router();

// registramos rutas routes
// Router.get("/users", UserController.getAll)

// Router.get("/users/:id", async function (req: Request, res: Response) {
//     const results = await AppDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     return res.send(results)
// })

// Router.post("/users", async function (req: Request, res: Response) {
//     const user = await AppDataSource.getRepository(User).create(req.body)
//     const results = await AppDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await AppDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     AppDataSource.getRepository(User).merge(user, req.body)
//     const results = await AppDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await AppDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })
export { Router as userRouter };