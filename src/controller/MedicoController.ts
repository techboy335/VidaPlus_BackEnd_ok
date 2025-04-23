import { Request, Response } from "express";
import { MedicoBusiness } from "../business/MedicoBusiness";
import { IdGenerator } from "../services/IdGenerator";

export class MedicoController {
  constructor(private medicoBusiness: MedicoBusiness) {}

  private idGenerator = new IdGenerator();

  public criar = async (req: Request, res: Response) => {
    try {
      const { nome, especialidade, email, telefone } = req.body;

      const novoMedico = {
        id: this.idGenerator.generate(),
        nome,
        especialidade,
        email,
        telefone,
        created_at: new Date().toISOString(),
        updated_at: null

  };

      await this.medicoBusiness.criar(novoMedico);
      res.status(201).send({ mensagem: "Médico cadastrado com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public listar = async (req: Request, res: Response) => {
    try {
      const medicos = await this.medicoBusiness.listar();
      res.status(200).send(medicos);
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public buscarPorId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const medico = await this.medicoBusiness.buscarPorId(id);
      res.status(200).send(medico);
    } catch (error: any) {
      res.status(404).send({ erro: error.message });
    }
  };

  public editar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;

      await this.medicoBusiness.editar(id, dadosAtualizados);
      res.status(200).send({ mensagem: "Médico atualizado com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public deletar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.medicoBusiness.deletar(id);
      res.status(200).send({ mensagem: "Médico removido com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };
}
