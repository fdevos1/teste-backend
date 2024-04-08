import { GetUserByCpfService } from "../services/get_user_by_cpf._service.js";

export class GetUserByCpfController {
  async get_user_by_cpf(req, res) {
    const getUserByCpfServices = new GetUserByCpfService();

    const { cpf } = req.params;

    console.log("cpf antes do try:", cpf);

    try {
      const result = await getUserByCpfServices.get_user_by_cpf(cpf);

      return res.status(200).send(result);
    } catch (err) {
      return res
        .status(500)
        .send("Erro ao recuperar as informações do usuário: " + err.message);
    }
  }
}
