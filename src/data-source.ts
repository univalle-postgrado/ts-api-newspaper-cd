import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv";
// import { User } from "./entity/User.entity";
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
    entities: [],
    migrationsTableName: "migrations",
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
})
