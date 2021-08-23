import { Response, Request } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
  async handle(request: Request, response: Response) {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }
}

export { ListUserController };
