import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActivitys1664760018260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activitys",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "filho_id",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "mae_id",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "atividadeEducativa",
                        type: "varchar",
                    },
                    {
                        name: "observacoes",
                        type: "varchar",
                    },
                    {
                        name: "dia",
                        type: "varchar",
                    },
                    {
                        name: "hora",
                        type: "varchar",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activitys")
    }

}
