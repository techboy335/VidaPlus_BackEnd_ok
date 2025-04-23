import { Consulta } from "../models/Consulta";
import { ConsultaDatabase } from "../database/ConsultaDatabase";

export class ConsultaBusiness {
  constructor(private consultaDatabase: ConsultaDatabase) {}

  public criar = async (consulta: Consulta): Promise<void> => {
    await this.consultaDatabase.criar(consulta);
  };

  public listar = async (): Promise<Consulta[]> => {
    return await this.consultaDatabase.listar();
  };

  public buscarPorId = async (id: string): Promise<Consulta> => {
    const consulta = await this.consultaDatabase.buscarPorId(id);
    if (!consulta) throw new Error("Consulta não encontrada");
    return consulta;
  };

  public editar = async (id: string, dados: Partial<Consulta>): Promise<void> => {
    const existe = await this.consultaDatabase.buscarPorId(id);
    if (!existe) throw new Error("Consulta não encontrada");
    await this.consultaDatabase.editar(id, dados);
  };

  public deletar = async (id: string): Promise<void> => {
    const existe = await this.consultaDatabase.buscarPorId(id);
    if (!existe) throw new Error("Consulta não encontrada");
    await this.consultaDatabase.deletar(id);
  };
}
