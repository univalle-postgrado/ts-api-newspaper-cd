import * as express from "express"
import { categoryRouter } from "./routes/category.routes";
import { AppDataSource } from "./data-source"

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app = express()
app.use(express.json())

app.use("/api", categoryRouter);

// start express server
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})