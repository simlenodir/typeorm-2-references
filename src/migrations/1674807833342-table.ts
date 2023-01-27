import { MigrationInterface, QueryRunner } from "typeorm";

export class table1674807833342 implements MigrationInterface {
    name = 'table1674807833342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employees" ("employee_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "employee_name" character varying(48) NOT NULL, CONSTRAINT "PK_c9a09b8e6588fb4d3c9051c8937" PRIMARY KEY ("employee_id"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("job_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job_title" character varying(48) NOT NULL, "job_salary" character varying(32) NOT NULL, CONSTRAINT "PK_75f2e130e4b1372fea0b6248a17" PRIMARY KEY ("job_id"))`);
        await queryRunner.query(`CREATE TABLE "jobs_employees_employees" ("jobsJobId" uuid NOT NULL, "employeesEmployeeId" uuid NOT NULL, CONSTRAINT "PK_8da2c81102d776b13001563b8fd" PRIMARY KEY ("jobsJobId", "employeesEmployeeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6779cac9bdfd1f1cc713c03ce7" ON "jobs_employees_employees" ("jobsJobId") `);
        await queryRunner.query(`CREATE INDEX "IDX_289f92e3f504e20034470142e6" ON "jobs_employees_employees" ("employeesEmployeeId") `);
        await queryRunner.query(`ALTER TABLE "jobs_employees_employees" ADD CONSTRAINT "FK_6779cac9bdfd1f1cc713c03ce7b" FOREIGN KEY ("jobsJobId") REFERENCES "jobs"("job_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "jobs_employees_employees" ADD CONSTRAINT "FK_289f92e3f504e20034470142e6e" FOREIGN KEY ("employeesEmployeeId") REFERENCES "employees"("employee_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs_employees_employees" DROP CONSTRAINT "FK_289f92e3f504e20034470142e6e"`);
        await queryRunner.query(`ALTER TABLE "jobs_employees_employees" DROP CONSTRAINT "FK_6779cac9bdfd1f1cc713c03ce7b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_289f92e3f504e20034470142e6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6779cac9bdfd1f1cc713c03ce7"`);
        await queryRunner.query(`DROP TABLE "jobs_employees_employees"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "employees"`);
    }

}
