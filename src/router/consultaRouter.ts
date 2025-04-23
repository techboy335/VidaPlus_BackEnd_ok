import express from "express";
import { ConsultaController } from "../controller/ConsultaController";
import { ConsultaBusiness } from "../business/ConsultaBusiness";
import { ConsultaDatabase } from "../database/ConsultaDatabase";
import { authMiddleware } from "../middlewares/authMiddleware";

export const consultaRouter = express.Router();

const consultaController = new ConsultaController(
  new ConsultaBusiness(new ConsultaDatabase())
);

// Endpoints protegidos por token
consultaRouter.post("/", authMiddleware, consultaController.criar);
consultaRouter.get("/", authMiddleware, consultaController.listar);
consultaRouter.get("/:id", authMiddleware, consultaController.buscarPorId);
consultaRouter.put("/:id", authMiddleware, consultaController.editar);
consultaRouter.delete("/:id", authMiddleware, consultaController.deletar);
