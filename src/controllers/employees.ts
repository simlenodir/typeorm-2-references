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

        res.json(newEmployee)    
    }
    public async POST_jemployeeJob(req: Request, res: Response):Promise<void> {
        const {employeeId, jobId} = req.body

        const employeesEmployeeId = employeeId
        const jobsJobId = jobId
        console.log(employeeId, jobId);
        
       try {
        const newEmployeeJob = await dataSource
        .createQueryBuilder()
        .insert()
        .into('jobs_employees_employees')
        .values({jobsJobId, employeesEmployeeId})
        .returning([jobsJobId, employeesEmployeeId])
        .execute()

        res.json(newEmployeeJob)
        console.log(newEmployeeJob);
        
       } catch (error) {
            console.log(error);
            
       }
    }
}

export default new EmployeesController()