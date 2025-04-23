import { BaseDatabase } from "./BaseDatabase";
import { Consulta } from "../models/Consulta";

export class ConsultaDatabase extends BaseDatabase {
  public static TABLE_NAME = "consultas";

  public async criar(consulta: Consulta): Promise<void> {
    await BaseDatabase.connection(ConsultaDatabase.TABLE_NAME).insert(consulta);
  }

  public async listar(): Promise<Consulta[]> {
    return await BaseDatabase.connection(ConsultaDatabase.TABLE_NAME).select();
  }

  public async buscarPorId(id: string): Promise<Consulta | undefined> {
    const [consulta] = await BaseDatabase.connection(ConsultaDatabase.TABLE_NAME)
      .select()
      .where({ id });
    return consulta;
  }

  public async editar(id: string, dados: Partial<Consulta>): Promise<void> {
    await BaseDatabase.connection(ConsultaDatabase.TABLE_NAME)
      .update({ ...dados, updated_at: new Date().toISOString() })
      .where({ id });
  }

  public async deletar(id: string): Promise<void> {
    await BaseDatabase.connection(ConsultaDatabase.TABLE_NAME)
      .delete()
      .where({ id });
  }
}
