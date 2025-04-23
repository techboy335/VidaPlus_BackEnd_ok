import jwt from "jsonwebtoken";

export class TokenManager {
  private static JWT_KEY = "minha-chave-secreta"; // Você pode trocar por process.env.JWT_KEY futuramente

  public createToken = (payload: any): string => {
    return jwt.sign(payload, TokenManager.JWT_KEY, {
      expiresIn: "1h" // Token expira em 1 hora
    });
  };

  public getPayload = (token: string): any => {
    try {
      return jwt.verify(token, TokenManager.JWT_KEY);
    } catch (error) {
      return null;
    }
  };
}
