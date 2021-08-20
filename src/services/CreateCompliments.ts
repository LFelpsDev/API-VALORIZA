import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentsRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentsService {
  async execute({message, tag_id, user_sender, user_receiver}: IComplimentsRequest){
    const complimentsRepositories  = getCustomRepository(ComplimentRepositories)
    const usersRepositores = getCustomRepository(UsersRepositories)

    if(user_sender === user_receiver){
      throw new Error("Incorrect User Receiver");
    }

    const userReceiverExists = await usersRepositores.findOne(user_receiver) // por padrão o findOne retorna o ID

    if(!userReceiverExists){
      throw new Error("User Receiver does not Exists!");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepositories.save(compliment)

    return compliment;

  }
}


export {  CreateComplimentsService }