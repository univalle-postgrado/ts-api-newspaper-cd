import { MigrationInterface, QueryRunner } from "typeorm";

export class Categories1708044367704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            ` 
            --Table Definition
            CREATE TABLE categories (
                id serial NOT NULL,
                title character varying(60) NOT NULL,
                alias character varying(60) NOT NULL,
                "position" smallint NOT NULL,
                published boolean NOT NULL,
                created_at timestamp(0) without time zone,
                updated_at timestamp(0) without time zone,
                created_by character varying(60) NOT NULL,
                updated_by character varying(60),
                PRIMARY KEY(id)
            )
            `
          ),
            undefined;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`, undefined);
    }

}
