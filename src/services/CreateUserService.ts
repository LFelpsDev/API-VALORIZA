// tudo que for relacionado a criação de Usuários

import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest){
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email){
      throw new Error("Email Incorrect");
    }

    // Verificando se o Usuário Existe
    const userAlreadyExists = await usersRepository.findOne({ email }); 

    // se Existir Vou Forçar esse Erro
    if (userAlreadyExists){
      throw new Error("User Already Exists");
    }

    // Se tiver tudo certo cria essa instância, e salve esse objeto no banco de dados
    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user;
  }
}

export { CreateUserService }