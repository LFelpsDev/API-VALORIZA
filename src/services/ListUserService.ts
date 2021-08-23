import { getCustomRepository } from "typeorm"
import { UsersRepositories } from '../repositories/UsersRepositories';
import { classToPlain } from 'class-transformer'


class ListUserService {
  async execute(){
    const userRepositories = getCustomRepository(UsersRepositories)

    const userList = await userRepositories.find()

    return classToPlain(userList);
    
  }
}


export { ListUserService }