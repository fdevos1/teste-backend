import { UpdateUserService } from "../services/update_user_service.js";
import { NotFoundError } from "../helpers/api_errors.js";
import { GetUserByCpfService } from "../services/get_user_by_cpf._service.js";

export class UpdateUserController {
  async update_user(req, res) {
    const service = new UpdateUserService();
    const getService = new GetUserByCpfService();

    const { cpf } = req.params;
    const data = req.body;

    if (!cpf) {
      throw new NotFoundError("CPF não enviado");
    }

    try {
      let result = [];
      let updatedUser = [];

      result = await service.update_user(data, cpf);

      if (result.length <= 0) {
        throw new NotFoundError(
          "Nenhum resultado encontrado, verifique o CPF digitado"
        );
      }

      updatedUser = await getService.get_user_by_cpf(cpf);

      return res.status(200).json({
        message: "Usuário alterado com sucesso",
        updated_user: updatedUser,
      });
    } catch (err) {
      return res.json({ message: err.message });
    }
  }
}
