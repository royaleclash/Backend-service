import "reflect-metadata";
import { DataSource } from "typeorm";
import { Hamburger } from "./entities/Hamburger";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities:[Hamburger],
    migrations: [],
    subscribers: []
})