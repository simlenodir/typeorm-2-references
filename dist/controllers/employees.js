"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const employees_entity_1 = require("../entities/employees.entity");
class EmployeesController {
    async GET_employees(req, res) {
        const employees = await config_1.default
            .getRepository(employees_entity_1.Employees)
            .createQueryBuilder('employees')
            .leftJoinAndSelect('employees.jobs', 'jobs')
            .getMany();
        res.json(employees);
    }
    async POST_jemployee(req, res) {
        const { name, jobId } = req.body;
        const newEmployee = await config_1.default
            .getRepository(employees_entity_1.Employees)
            .createQueryBuilder("newEmployee")
            .insert()
            .into(employees_entity_1.Employees)
            .values({ name })
            .returning(['employee_id', name])
            .execute();
        const employeesEmployeeId = newEmployee.raw[0].employee_id;
        const jobsJobId = jobId;
        const newEmployeeJob = await config_1.default
            .getRepository(employees_entity_1.Employees)
            .createQueryBuilder('newEmployeeJob')
            .insert()
            .into('jobs_employees_employees')
            .values({ employeesEmployeeId, jobsJobId })
            .returning(['employeesEmployeeId', 'jobsJobId'])
            .execute();
        console.log(newEmployeeJob);
        res.json(newEmployee);
    }
}
exports.default = new EmployeesController();
