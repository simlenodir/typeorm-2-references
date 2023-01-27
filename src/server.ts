import dotenv from "dotenv";
import express, { Application } from "express";
import dataSource from "./config/config";
import router from "./routes";
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 9001;

try {
	app.use(express.json());

	dataSource
		.initialize()
		.then((): void => console.log("Connected"))
		.catch((err: unknown): void => console.log(err));

	app.use(router);
} catch (error) {
	console.log(error);
} finally {
	app.listen(PORT, (): void => {
		console.log(`App started ${PORT}`);
	});
}
