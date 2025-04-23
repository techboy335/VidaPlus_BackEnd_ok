import { Request, Response, NextFunction } from "express";
import { TokenManager } from "../services/TokenManager";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;            // pega o header
    if (!authHeader) throw new Error("Token não fornecido");

    const [, token] = authHeader.split(" ");                  // “Bearer <token>”
    if (!token) throw new Error("Token mal formatado");

    const payload = new TokenManager().getPayload(token);     // verifica e decodifica
    if (!payload || !payload.id) throw new Error("Token inválido");

    // opcional: anexar o userId ao req para usar nos controllers
    (req as any).userId = payload.id;

    next();                                                  // tudo certo, segue
  } catch (err: any) {
    res.status(401).send({ error: err.message });
  }
};
