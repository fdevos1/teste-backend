import { NotFoundError } from "../helpers/api_errors.js";
import { GetUserByIdService } from "../services/get_user_by_id_service.js";

export class GetUserByIdController {
  async get_user_by_id(req, res) {
    const service = new GetUserByIdService();

    const { id } = req.params;

    if (!id) {
      throw new NotFoundError("ID não enviado");
    }

    try {
      let result = [];

      result = await service.get_user_by_id(id);

      if (result.length <= 0) {
        throw new NotFoundError("Nenhum resultado encontrado");
      }

      return res.status(200).json({ user: result });
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
  }
}
