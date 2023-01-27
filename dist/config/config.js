"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
const dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: 'nodir',
    database: 'n33',
    entities: [path_1.default.join(__dirname, '..', 'entities', '*.entity.{ts,js}')],
    migrations: [path_1.default.join(__dirname, '..', 'migrations', '**/*.{ts,js}')],
    synchronize: false
});
exports.default = dataSource;
