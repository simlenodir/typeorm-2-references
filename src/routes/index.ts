import { Router } from "express";
import employees from "../controllers/employees";
import jobs from "../controllers/jobs";

const router = Router()

export default router
    .get('/jobs/get', jobs.GET_jobs)
    .post('/jobs/create', jobs.POST_jobs)
    .get('/employees/get', employees.GET_employees)
    .post('/employee/create', employees.POST_jemployee, )
