import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticationRequest {
  email: string;
  password: string;
}

class AuthenticationUserService {
  async execute({ email, password }: IAuthenticationRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    // Verificar se email existe
    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password Incorrect");
    }
    // Verificar se senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password Incorrect");
    }

    // Gerar Token
    const token = sign(
      {
        email: user.email,
      },
      process.env.TOKEN_SIGN,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return token
  }
}

export { AuthenticationUserService };
