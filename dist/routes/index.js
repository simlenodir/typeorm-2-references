"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employees_1 = __importDefault(require("../controllers/employees"));
const jobs_1 = __importDefault(require("../controllers/jobs"));
const router = (0, express_1.Router)();
exports.default = router
    .get('/jobs/get', jobs_1.default.GET_jobs)
    .post('/jobs/create', jobs_1.default.POST_jobs)
    .get('/employees/get', employees_1.default.GET_employees)
    .post('/employee/create', employees_1.default.POST_jemployee);
