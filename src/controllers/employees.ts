import { Request, Response } from "express";
import dataSource from "../config/config";
import { Employees } from "../entities/employees.entity";

class EmployeesController{
    public async GET_employees(req: Request, res: Response) {
        const employees = await dataSource
            .getRepository(Employees)
            .createQueryBuilder('employees')
            .leftJoinAndSelect('employees.jobs', 'jobs')
            .getMany()

            res.json(employees)
    }

    public async POST_jemployee(req: Request, res: Response):Promise<void> {
        const {name, jobId} = req.body
        const newEmployee = await dataSource
            .getRepository(Employees)
            .createQueryBuilder("newEmployee")
            .insert()
            .into(Employees)
            .values({name})
            .returning(['employee_id', name])
            .execute()
            
            const employeesEmployeeId = newEmployee.raw[0].employee_id
            const jobsJobId = jobId

        const newEmployeeJob = await dataSource
            .getRepository(Employees)
            .createQueryBuilder('newEmployeeJob')
            .insert()
            .into('jobs_employees_employees')
            .values({employeesEmployeeId, jobsJobId})
            .returning(['employeesEmployeeId', 'jobsJobId'])
            .execute()

            console.log(newEmployeeJob);
            
        res.json(newEmployee)    
    }
}

export default new EmployeesController()