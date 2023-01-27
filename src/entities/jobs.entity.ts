import { join } from "path"
import {Entity, JoinTable, PrimaryGeneratedColumn, ManyToMany, Column} from "typeorm"
import { Employees } from "./employees.entity"

@Entity({
    name: 'jobs'
})
export class Jobs {
    @PrimaryGeneratedColumn('uuid', {
        name: 'job_id'
    })
    id: string

    @Column({
        name: 'job_title',
        type: 'character varying',
        nullable: false,
        length: 48
    })
    title: string

    @Column({
        name: 'job_salary',
        type: 'character varying',
        nullable: false,
        length: 32
    })
    salary: string

    @ManyToMany(() => Employees, employees => employees.jobs)    
    @JoinTable()
    employees: []
}