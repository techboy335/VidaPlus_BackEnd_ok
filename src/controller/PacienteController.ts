import { Request, Response } from "express";
import { PacienteBusiness } from "../business/PacienteBusiness";
import { IdGenerator } from "../services/IdGenerator";

export class PacienteController {
  constructor(private pacienteBusiness: PacienteBusiness) {}

  private idGenerator = new IdGenerator();

  public criar = async (req: Request, res: Response) => {
    try {
      const { nome, cpf, data_nascimento, email, telefone } = req.body;

      const novoPaciente = {
        id: this.idGenerator.generate(),
        nome,
        cpf,
        data_nascimento,
        email,
        telefone
      };

      await this.pacienteBusiness.criar(novoPaciente);
      res.status(201).send({ mensagem: "Paciente cadastrado com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public listar = async (req: Request, res: Response) => {
    try {
      const pacientes = await this.pacienteBusiness.listar();
      res.status(200).send(pacientes);
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public buscarPorId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const paciente = await this.pacienteBusiness.buscarPorId(id);
      res.status(200).send(paciente);
    } catch (error: any) {
      res.status(404).send({ erro: error.message });
    }
  };

  public editar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;

      await this.pacienteBusiness.editar(id, dadosAtualizados);
      res.status(200).send({ mensagem: "Paciente atualizado com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public deletar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await this.pacienteBusiness.deletar(id);
      res.status(200).send({ mensagem: "Paciente removido com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };
}
