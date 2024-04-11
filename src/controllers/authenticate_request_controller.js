import jwt from "jsonwebtoken";

import { NotFoundError } from "../helpers/api_errors.js";
import { GetUserByCpfService } from "../services/get_user_by_cpf_service.js";

export class AuthenticateRequestController {
  async authenticate(req, res) {
    const getByCpfService = new GetUserByCpfService();
    const secretKey = "placeholder_key";

    try {
      const { cpf } = req.body;
      let result = [];

      result = await getByCpfService.get_user_by_cpf(cpf);

      if (result.length < 0) {
        throw new NotFoundError("CPF inválido");
      }

      const user = result[0];

      const token = jwt.sign({ id: user.id, nome: user.nome }, secretKey);

      return res.status(201).json({ token });
    } catch (err) {
      return resizeBy.status(err.statusCode).json({ message: err.message });
    }
  }
}
