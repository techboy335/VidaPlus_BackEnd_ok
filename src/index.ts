import express from "express";
import cors from "cors";

// IMPORTS DAS ROTAS
import { userRouter } from "./router/userRouter";
import { consultaRouter } from "./router/consultaRouter";
import { pacienteRouter } from "./router/pacienteRouter";
import { medicoRouter } from "./router/medicoRouter";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();
app.use(express.json());
app.use(cors());

// ROTAS
app.use("/users", userRouter);
app.use("/consultas", consultaRouter);
app.use("/pacientes", pacienteRouter);
app.use("/medicos", medicoRouter);
app.use("/pacientes", authMiddleware, pacienteRouter);

// PORTA
app.listen(3003, () => {
  console.log("Server running on port 3003");
});
