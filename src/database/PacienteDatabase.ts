import { BaseDatabase } from "./BaseDatabase";
import { PacienteDB } from "../models/Paciente";

export class PacienteDatabase extends BaseDatabase {
  public static TABLE_NAME = "pacientes";

  public async criar(paciente: PacienteDB): Promise<void> {
    await BaseDatabase.connection(PacienteDatabase.TABLE_NAME).insert(paciente);
  }

  public async listar(): Promise<PacienteDB[]> {
    return await BaseDatabase.connection(PacienteDatabase.TABLE_NAME).select();
  }

  public async buscarPorId(id: string): Promise<PacienteDB | undefined> {
    const [paciente] = await BaseDatabase.connection(PacienteDatabase.TABLE_NAME)
      .select()
      .where({ id });

    return paciente;
  }

  public async editar(id: string, dados: Partial<PacienteDB>): Promise<void> {
    await BaseDatabase.connection(PacienteDatabase.TABLE_NAME)
      .update({ ...dados, updated_at: new Date().toISOString() })
      .where({ id });
  }

  public async deletar(id: string): Promise<void> {
    await BaseDatabase.connection(PacienteDatabase.TABLE_NAME).delete().where({ id });
  }
}
