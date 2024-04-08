import { NotFoundError } from "../helpers/api_errors.js";
import { DeleteUserService } from "../services/delete_user_service.js";
import { GetUserByCpfService } from "../services/get_user_by_cpf._service.js";

export class DeleteUserController {
  async delete_user(req, res) {
    const service = new DeleteUserService();
    const getService = new GetUserByCpfService();

    const { cpf } = req.body;

    if (!cpf) {
      throw new NotFoundError("CPF não enviado");
    }

    try {
      let result = [];
      let removedUser = [];

      removedUser = await getService.get_user_by_cpf(cpf);
      result = await service.delete_user(cpf);

      return res.status(200).json({
        message: "Usuário deletado com sucesso",
        user: removedUser,
      });
    } catch (err) {
      return res.json({});
    }
  }
}
