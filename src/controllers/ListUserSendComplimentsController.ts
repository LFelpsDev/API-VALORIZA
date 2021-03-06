import { Request, Response } from 'express';
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'


class ListUserSendComplimentsController {
  async handle(request: Request, response: Response){
    const { user_id } = request;

    const listSendComplimentsService = new ListUserSendComplimentsService()

    const compliment = await listSendComplimentsService.execute(user_id)

    return response.json(compliment)
  }
  
}

export { ListUserSendComplimentsController  }