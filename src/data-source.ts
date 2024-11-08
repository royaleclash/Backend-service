import "reflect-metadata";
import { DataSource } from "typeorm";
import { hamburger } from "./entities/hamburger";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities:[hamburger],
    migrations: [],
    subscribers: []
})