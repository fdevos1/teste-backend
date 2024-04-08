import { DeleteUserService } from "../services/delete_user_service.js";

export class DeleteUserController {
  async delete_user(req, res) {
    const service = new DeleteUserService();

    const { cpf } = req.params;

    try {
      const result = await service.delete_user(cpf);
    } catch (err) {
      return res.status(500).send("Erro ao remover usuário: " + err.message);
    }
  }
}
