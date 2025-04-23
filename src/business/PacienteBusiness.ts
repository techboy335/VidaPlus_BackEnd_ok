import { PacienteDB } from "../models/Paciente";
import { PacienteDatabase } from "../database/PacienteDatabase";

export class PacienteBusiness {
  constructor(private pacienteDatabase: PacienteDatabase) {}

  public criar = async (paciente: PacienteDB): Promise<void> => {
    await this.pacienteDatabase.criar(paciente);
  };

  public listar = async (): Promise<PacienteDB[]> => {
    return await this.pacienteDatabase.listar();
  };

  public buscarPorId = async (id: string): Promise<PacienteDB> => {
    const paciente = await this.pacienteDatabase.buscarPorId(id);
    if (!paciente) throw new Error("Paciente não encontrado");
    return paciente;
  };

  public editar = async (id: string, dados: Partial<PacienteDB>): Promise<void> => {
    const pacienteExistente = await this.pacienteDatabase.buscarPorId(id);
    if (!pacienteExistente) throw new Error("Paciente não encontrado");

    await this.pacienteDatabase.editar(id, dados);
  };

  public deletar = async (id: string): Promise<void> => {
    const pacienteExistente = await this.pacienteDatabase.buscarPorId(id);
    if (!pacienteExistente) throw new Error("Paciente não encontrado");

    await this.pacienteDatabase.deletar(id);
  };
}
