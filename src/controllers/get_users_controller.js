import { GetUsersService } from "../services/get_users_service.js";

export class GetUserController {
  async get_all_users(req, res) {
    const getUserServices = new GetUsersService();

    try {
      const result = await getUserServices.get_all_users();

      return res.status(200).send(result);
    } catch (err) {
      return res
        .status(500)
        .send("Erro ao recuperar as informações de usuários: " + err.message);
    }
  }
}
