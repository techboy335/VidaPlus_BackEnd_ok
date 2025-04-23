import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("consultas", (table) => {
    table.string("id").primary();
    table.string("paciente_id").notNullable();
    table.string("medico_id").notNullable();
    table.string("data").notNullable();
    table.string("horario").notNullable();
    table.string("motivo").notNullable();
    table.string("observacoes");
    table.string("created_at").defaultTo(knex.fn.now());
    table.string("updated_at");

    table
      .foreign("paciente_id")
      .references("id")
      .inTable("pacientes")
      .onDelete("CASCADE");

    table
      .foreign("medico_id")
      .references("id")
      .inTable("medicos")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("consultas");
}
