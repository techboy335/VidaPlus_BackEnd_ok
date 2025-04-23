import express from "express";
import { MedicoController } from "../controller/MedicoController";
import { MedicoBusiness } from "../business/MedicoBusiness";
import { MedicoDatabase } from "../database/MedicoDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const medicoRouter = express.Router();

const medicoController = new MedicoController(
  new MedicoBusiness(new MedicoDatabase())
);

medicoRouter.post("/", medicoController.criar);
medicoRouter.get("/", medicoController.listar);
medicoRouter.get("/:id", medicoController.buscarPorId);
medicoRouter.put("/:id", medicoController.editar);
medicoRouter.delete("/:id", medicoController.deletar);
