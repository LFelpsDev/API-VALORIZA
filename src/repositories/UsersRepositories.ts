import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/User';


@EntityRepository(User)
class UsersRepositories extends Repository<User> { // fazendo a extensão, pois ja existe vários métodos criados dentro de Repository (Economiza Trabalho)

}

export { UsersRepositories } 