import path from "path"
import dotenv from "dotenv"
import { DataSource } from "typeorm"
dotenv.config()

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: 'nodir',
    database: 'n33',
    entities: [path.join(__dirname, '..', 'entities' ,'*.entity.{ts,js}')],
    migrations: [path.join(__dirname, '..', 'migrations' ,'**/*.{ts,js}')],
    synchronize: false
})

export default dataSource