import { BadRequestError } from "../helpers/api_errors.js";
import { CreateNewUserService } from "../services/create_new_user_service.js";
import { GetUserByCpfService } from "../services/get_user_by_cpf._service.js";
import { GetUserByIdService } from "../services/get_user_by_id_service.js";

export class CreateNewUserController {
  async new_user(req, res) {
    const service = new CreateNewUserService();
    const getByCpfService = new GetUserByCpfService();
    const getByIdService = new GetUserByIdService();

    try {
      const userData = req.body;
      let result = [];
      let createdUser = [];

      const userAlreadyExist = await getByCpfService.get_user_by_cpf(
        userData.cpf
      );

      if (userAlreadyExist.length > 0) {
        throw new BadRequestError("Usuário já existe");
      }

      result = await service.create_new_user(userData);
      createdUser = await getByIdService.get_user_by_id(result.insertId);

      return res
        .status(201)
        .json({ message: "Usuário criado com sucesso", user: createdUser });
    } catch (err) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}
