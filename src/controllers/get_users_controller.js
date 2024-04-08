import { GetUsersService } from "../services/get_users_service.js";
import { NotFoundError, ApiError } from "../helpers/api_errors.js";

export class GetUserController {
  async get_all_users(req, res) {
    const service = new GetUsersService();

    try {
      let result = [];

      result = await service.get_all_users();

      if (result.length <= 0) {
        throw new NotFoundError("Nenhum usuário foi encontrado");
      }

      return res.status(200).json({ users: result });
    } catch (err) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}
