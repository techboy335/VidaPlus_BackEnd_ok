import { MedicoDB } from "../models/Medico";
import { MedicoDatabase } from "../database/MedicoDatabase";

export class MedicoBusiness {
  constructor(private medicoDatabase: MedicoDatabase) {}

  public criar = async (medico: MedicoDB): Promise<void> => {
    await this.medicoDatabase.criar(medico);
  };

  public listar = async (): Promise<MedicoDB[]> => {
    return await this.medicoDatabase.listar();
  };

  public buscarPorId = async (id: string): Promise<MedicoDB> => {
    const medico = await this.medicoDatabase.buscarPorId(id);
    if (!medico) throw new Error("Médico não encontrado");
    return medico;
  };

  public editar = async (id: string, dados: Partial<MedicoDB>): Promise<void> => {
    const existe = await this.medicoDatabase.buscarPorId(id);
    if (!existe) throw new Error("Médico não encontrado");
    await this.medicoDatabase.editar(id, dados);
  };

  public deletar = async (id: string): Promise<void> => {
    const existe = await this.medicoDatabase.buscarPorId(id);
    if (!existe) throw new Error("Médico não encontrado");
    await this.medicoDatabase.deletar(id);
  };
}
