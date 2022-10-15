import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActive1665866266949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "active",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "originalAppUserId",
                        type: "varchar",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("active")
    }

}
