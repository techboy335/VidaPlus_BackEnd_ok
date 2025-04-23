import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("consultas", (table) => {
    table.increments("id").primary();

    table.integer("paciente_id").notNullable()
      .references("id").inTable("pacientes")
      .onDelete("CASCADE");

    table.string("medico_id").notNullable()
      .references("id").inTable("medicos")
      .onDelete("CASCADE");

    table.date("data").notNullable();
    table.time("horario").notNullable();
    table.string("motivo");
    table.text("observacoes");
    table.timestamps(true, true); // created_at e updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("consultas");
}
