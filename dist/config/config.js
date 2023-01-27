"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
const dataSource = new typeorm_1.DataSource({
    type: "postgres",
    // host: process.env.DB_HOST,
});
