import { Request, Response } from "express";
import dataSource from "../config/config";
import { Jobs } from "../entities/jobs.entity";

class JobsController {
   public async GET_jobs(req: Request, res: Response):Promise<void> {
        const jobs = await dataSource
            .getRepository(Jobs)
            .createQueryBuilder("jobs")
            .leftJoinAndSelect('jobs.employees', 'employees')
            .getMany()
        
        res.json(jobs)    
   }
   public async POST_jobs(req: Request, res: Response):Promise<void> {
    const {title, salary} = req.body
    const newJobs = await dataSource
        .getRepository(Jobs)
        .createQueryBuilder("newJobs")
        .insert()
        .into(Jobs)
        .values({title, salary})
        .returning(['id', title, salary])
        .execute()
    console.log(newJobs.raw[0]);
    
    res.json(newJobs)    
}
}

export default new JobsController()