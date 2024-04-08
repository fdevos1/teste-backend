import { GetUserByCpfService } from "../services/get_user_by_cpf._service.js";

export class GetUserByCpfController {
  async get_user_by_cpf(req, res) {
    const service = new GetUserByCpfService();

    const { cpf } = req.params;

    try {
      const result = await service.get_user_by_cpf(cpf);

      return res.status(200).send(result);
    } catch (err) {
      return res
        .status(500)
        .send("Erro ao recuperar as informações do usuário: " + err.message);
    }
  }
}
