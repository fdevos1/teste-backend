import { CreateNewUserService } from "../services/create_new_user_service.js";

export class CreateNewUserController {
  async new_user(req, res) {
    const service = new CreateNewUserService();

    try {
      const userData = req.body;
      const result = await service.create_new_user(userData);

      return res.status(201).send("Usuário criado com sucesso!" + result);
    } catch (err) {
      return res.status(500).send("Error ao criar usuário: " + err.message);
    }
  }
}
