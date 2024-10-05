import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User";
import { Category } from "./entity/Category";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ls-be4e84dc3bde666b72d0069d6199a517d5b6f83d.c2gjf8cot7pl.us-east-1.rds.amazonaws.com",
    port: 5432,
    username: "dbmasteruser",
    password: "37?}!$$%<#>)m[kI$n[h2DS$=K31Lbn*",
    database: "ts_bdapinewspaper",
    synchronize: true,
    logging: false,
    entities: [Category],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
    extra: {
      "ssl": {
         "rejectUnauthorized": false
      }
    }
})
