import express from "express";
import { PacienteController } from "../controller/PacienteController";
import { PacienteBusiness } from "../business/PacienteBusiness";
import { PacienteDatabase } from "../database/PacienteDatabase";
import { authMiddleware } from "../middlewares/authMiddleware";

export const pacienteRouter = express.Router();

const pacienteController = new PacienteController(
  new PacienteBusiness(new PacienteDatabase())
);

// Endpoints protegidos por token
pacienteRouter.post("/", authMiddleware, pacienteController.criar);
pacienteRouter.get("/", authMiddleware, pacienteController.listar);
pacienteRouter.get("/:id", authMiddleware, pacienteController.buscarPorId);
pacienteRouter.put("/:id", authMiddleware, pacienteController.editar);
pacienteRouter.delete("/:id", authMiddleware, pacienteController.deletar);
