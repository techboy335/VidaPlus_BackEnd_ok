import { SignupInputDTO, LoginInputDTO } from "../dtos/UserDTO";
import { UserDatabase } from "../database/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { HashManager } from "../services/HashManager";
import { UserDB } from "../models/User";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager,
    private hashManager: HashManager
  ) {}

  public signup = async (input: SignupInputDTO): Promise<string> => {
    const { nome, email, senha } = input;

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(senha);

    const novoUsuario: UserDB = {
      id,
      nome,
      email,
      senha: hashedPassword,
    };

    await this.userDatabase.insertUser(novoUsuario);

    const token = this.tokenManager.createToken({ id });

    return token;
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    const { email, senha } = input;

    const userDB = await this.userDatabase.findUserByEmail(email);
    if (!userDB) throw new Error("E-mail não encontrado");

    const senhaValida = await this.hashManager.compare(senha, userDB.senha);
    if (!senhaValida) throw new Error("Senha incorreta");

    const token = this.tokenManager.createToken({ id: userDB.id });

    return token;
  };
}
