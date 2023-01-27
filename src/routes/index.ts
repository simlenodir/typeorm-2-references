import { Router } from "express";
import jobs from "../controllers/jobs";

const router = Router()

export default router
    .get('/jobs/get', jobs.GET_jobs)
    .post('/jobs/create', jobs.POST_jobs)