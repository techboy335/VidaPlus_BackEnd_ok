import { BaseDatabase } from "./BaseDatabase";
import { MedicoDB } from "../models/Medico";

export class MedicoDatabase extends BaseDatabase {
  public static TABLE_NAME = "medicos";

  public async criar(medico: MedicoDB): Promise<void> {
    await BaseDatabase.connection(MedicoDatabase.TABLE_NAME).insert(medico);
  }

  public async listar(): Promise<MedicoDB[]> {
    return await BaseDatabase.connection(MedicoDatabase.TABLE_NAME).select();
  }

  public async buscarPorId(id: string): Promise<MedicoDB | undefined> {
    const [medico] = await BaseDatabase.connection(MedicoDatabase.TABLE_NAME)
      .select()
      .where({ id });
    return medico;
  }

  public async editar(id: string, dados: Partial<MedicoDB>): Promise<void> {
    await BaseDatabase.connection(MedicoDatabase.TABLE_NAME)
      .update({ ...dados, updated_at: new Date().toISOString() })
      .where({ id });
  }

  public async deletar(id: string): Promise<void> {
    await BaseDatabase.connection(MedicoDatabase.TABLE_NAME)
      .delete()
      .where({ id });
  }
}
