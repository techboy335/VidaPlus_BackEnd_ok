import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("pacientes", (table) => {
    table.uuid("id").primary();
    table.string("nome").notNullable();
    table.string("cpf").notNullable().unique();
    table.date("data_nascimento").notNullable();
    table.string("email").notNullable().unique();
    table.string("telefone").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("pacientes");
}
