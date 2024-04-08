import { UpdateUserService } from "../services/update_user_service.js";

export class UpdateUserController {
  async update_user(req, res) {
    const service = new UpdateUserService();

    const { cpf } = req.params;
    const data = req.body;

    try {
      const result = await service.update_user({ data, cpf });

      return res.status(200).send(result);
    } catch (err) {
      return res
        .status(500)
        .send("Erro ao atualizar informações do usuário: ", +err.message);
    }
  }
}
