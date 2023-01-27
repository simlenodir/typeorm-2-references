"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
const typeorm_1 = require("typeorm");
const jobs_entity_1 = require("./jobs.entity");
let Employees = class Employees {
    id;
    name;
    jobs;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', {
        name: 'employee_id'
    }),
    __metadata("design:type", String)
], Employees.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'employee_name',
        type: 'character varying',
        nullable: false,
        length: 48
    }),
    __metadata("design:type", String)
], Employees.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => jobs_entity_1.Jobs, jobs => jobs.employees, {
        onDelete: 'CASCADE',
        cascade: true
    }),
    __metadata("design:type", jobs_entity_1.Jobs)
], Employees.prototype, "jobs", void 0);
Employees = __decorate([
    (0, typeorm_1.Entity)({
        name: 'employees'
    })
], Employees);
exports.Employees = Employees;
