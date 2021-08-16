import { getCustomRepository } from "typeorm"
import { TagsRepositories } from '../repositories/TagsRepositories'

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest){
    const tagsRepository = getCustomRepository(TagsRepositories)

    if(!name){
      throw new Error('Incorrect Name!')
    }

    const tagAlreadyExists = await tagsRepository.findOne({
      name
    })

    if (tagAlreadyExists){
      throw new Error("Name Already Exists");
    }
  }
}

export { CreateTagService }