import { Request, Response } from "express";
import { ConsultaBusiness } from "../business/ConsultaBusiness";
import { IdGenerator } from "../services/IdGenerator";

export class ConsultaController {
  constructor(private consultaBusiness: ConsultaBusiness) {}

  private idGenerator = new IdGenerator();

  public criar = async (req: Request, res: Response) => {
    try {
      const { paciente_id, medico_id, data, horario, motivo, observacoes } = req.body;

      const novaConsulta = {
        id: this.idGenerator.generate(),
        paciente_id,
        medico_id,
        data,
        horario,
        motivo,
        observacoes,
        created_at: new Date().toISOString(),
        updated_at: null
      };

      await this.consultaBusiness.criar(novaConsulta);
      res.status(201).send({ mensagem: "Consulta agendada com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public listar = async (req: Request, res: Response) => {
    try {
      const consultas = await this.consultaBusiness.listar();
      res.status(200).send(consultas);
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public buscarPorId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const consulta = await this.consultaBusiness.buscarPorId(id);
      res.status(200).send(consulta);
    } catch (error: any) {
      res.status(404).send({ erro: error.message });
    }
  };

  public editar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;

      await this.consultaBusiness.editar(id, dadosAtualizados);
      res.status(200).send({ mensagem: "Consulta atualizada com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };

  public deletar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.consultaBusiness.deletar(id);
      res.status(200).send({ mensagem: "Consulta cancelada com sucesso" });
    } catch (error: any) {
      res.status(500).send({ erro: error.message });
    }
  };
}
