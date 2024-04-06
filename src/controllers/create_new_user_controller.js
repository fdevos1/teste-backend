import { CreateNewUserService } from "../services/create_new_user_services.js";

export class CreateNewUserController {
  async new_user(req, res) {
    const createUserService = new CreateNewUserService();

    try {
      const userData = req.body;
      await createUserService.create_new_user(userData);

      return res.status(201).send("Usuário criado com sucesso!");
    } catch (err) {
      return res.status(500).send("Error ao criar usuário: " + err.message);
    }
  }
}
