import {Entity, PrimaryGeneratedColumn,ManyToMany, Column} from "typeorm"
import { Jobs } from "./jobs.entity"

@Entity({
    name: 'employees'
})
export class Employees {
    @PrimaryGeneratedColumn('uuid',{
        name: 'employee_id'
    })
    id: string

    @Column({
        name: 'employee_name',
        type: 'character varying',
        nullable: false,
        length: 48
    })
    name: string


    @ManyToMany(() => Jobs, jobs => jobs.employees, {
        onDelete: 'CASCADE',
        cascade: true
    })
    jobs: Jobs
}