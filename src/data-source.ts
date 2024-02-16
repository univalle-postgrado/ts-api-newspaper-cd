import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User";
import { Category } from "./entity/Category";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "5653651Mh3",
    database: "ts_bdapinewspaper",
    synchronize: true,
    logging: false,
    entities: [Category],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
})
