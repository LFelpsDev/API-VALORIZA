import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1629127808030 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid", // identificador Universal
            isPrimary: true, // chave primaria
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "admin",
            type: "boolean",
            default: false, //se eu não passar nenhuma informação, quero que por padrão o admin seja falso
          },
          {
            name: "password",
            type: "varchar",
            isPrimary: true, // chave primaria
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  } // para criar a tabela

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  } // para remover a tabela DropTable
}
