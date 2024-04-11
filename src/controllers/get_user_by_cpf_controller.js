import { NotFoundError } from "../helpers/api_errors.js";
import { GetUserByCpfService } from "../services/get_user_by_cpf_service.js";

export class GetUserByCpfController {
  async get_user_by_cpf(req, res) {
    const service = new GetUserByCpfService();

    const { cpf } = req.params;

    if (!cpf) {
      throw new NotFoundError("CPF não enviado");
    }

    try {
      let result = [];

      result = await service.get_user_by_cpf(cpf);

      if (result.length <= 0) {
        throw new NotFoundError(
          "Nenhum resultado encontrado, verifique o CPF digitado"
        );
      }

      return res.status(200).json({ user: result });
    } catch (err) {
      return res.status(err.statusCode).send({ message: err.message });
    }
  }
}
