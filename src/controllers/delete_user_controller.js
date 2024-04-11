import { NotFoundError } from "../helpers/api_errors.js";
import { DeleteUserService } from "../services/delete_user_service.js";
import { GetUserByCpfService } from "../services/get_user_by_cpf_service.js";

export class DeleteUserController {
  async delete_user(req, res) {
    const service = new DeleteUserService();
    const getService = new GetUserByCpfService();

    const { cpf } = req.body;
    const createdBy = req.user;

    if (!cpf) {
      throw new NotFoundError("CPF não enviado");
    }

    try {
      let result = [];
      let removedUser = [];

      result = await service.delete_user(createdBy.nome, cpf);
      removedUser = await getService.get_user_by_cpf(cpf);

      return res.status(200).json({
        message: "Usuário deletado com sucesso",
        user: removedUser,
      });
    } catch (err) {
      return res.json({});
    }
  }
}
