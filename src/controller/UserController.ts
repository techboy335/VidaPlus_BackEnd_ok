import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignupInputDTO, LoginInputDTO } from "../dtos/UserDTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    const { nome, email, senha } = req.body;

    const input: SignupInputDTO = { nome, email, senha };

    const token = await this.userBusiness.signup(input);

    res.status(201).send({ token });
  };

  public login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    const input: LoginInputDTO = { email, senha };

    const token = await this.userBusiness.login(input);

    res.status(200).send({ token });
  };
}
