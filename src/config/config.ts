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
    entities: [path.join(__dirname, '..', '*.entity/{ts,js}')],
    migrations: [],
    synchronize: false
})

export default dataSource