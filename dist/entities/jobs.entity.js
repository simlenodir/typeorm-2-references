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
exports.Jobs = void 0;
const typeorm_1 = require("typeorm");
const employees_entity_1 = require("./employees.entity");
let Jobs = class Jobs {
    id;
    title;
    salary;
    employees;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', {
        name: 'job_id'
    }),
    __metadata("design:type", String)
], Jobs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'job_title',
        type: 'character varying',
        nullable: false,
        length: 48
    }),
    __metadata("design:type", String)
], Jobs.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'job_salary',
        type: 'character varying',
        nullable: false,
        length: 32
    }),
    __metadata("design:type", String)
], Jobs.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => employees_entity_1.Employees, employees => employees.jobs),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Jobs.prototype, "employees", void 0);
Jobs = __decorate([
    (0, typeorm_1.Entity)({
        name: 'jobs'
    })
], Jobs);
exports.Jobs = Jobs;
