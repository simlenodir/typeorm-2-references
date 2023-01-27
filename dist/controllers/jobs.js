"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const jobs_entity_1 = require("../entities/jobs.entity");
class JobsController {
    async GET_jobs(req, res) {
        const jobs = await config_1.default
            .getRepository(jobs_entity_1.Jobs)
            .createQueryBuilder("jobs")
            .leftJoinAndSelect('jobs.employees', 'employees')
            .getMany();
        res.json(jobs);
    }
    async POST_jobs(req, res) {
        const { title, salary } = req.body;
        const newJobs = await config_1.default
            .getRepository(jobs_entity_1.Jobs)
            .createQueryBuilder("newJobs")
            .insert()
            .into(jobs_entity_1.Jobs)
            .values({ title, salary })
            .returning(['id', title, salary])
            .execute();
        console.log(newJobs.raw[0]);
        res.json(newJobs);
    }
}
exports.default = new JobsController();
