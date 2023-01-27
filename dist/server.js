"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9001;
try {
    app.use(express_1.default.json());
    config_1.default
        .initialize()
        .then(() => console.log("Connected"))
        .catch((err) => console.log(err));
    app.use(routes_1.default);
}
catch (error) {
    console.log(error);
}
finally {
    app.listen(PORT, () => {
        console.log(`App started ${PORT}`);
    });
}
