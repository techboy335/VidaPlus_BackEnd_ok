import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("medicos", (table) => {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("especialidade").notNullable();
    table.string("email").notNullable().unique();
    table.string("telefone").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("medicos");
}
