import { Router } from "express";

import { AuthenticateRequestController } from "../controllers/authenticate_request_controller.js";

import { CreateNewUserController } from "../controllers/create_new_user_controller.js";
import { GetUserController } from "../controllers/get_users_controller.js";
import { GetUserByCpfController } from "../controllers/get_user_by_cpf_controller.js";
import { GetUserByIdController } from "../controllers/get_user_by_id_controller.js";
import { DeleteUserController } from "../controllers/delete_user_controller.js";
import { UpdateUserController } from "../controllers/update_user_controllers.js";

import verifyToken from "../middlewares/verifyToken.js";

const routes = Router();

const authenticateUserRequest = new AuthenticateRequestController();

const createUserController = new CreateNewUserController();
const getUsersController = new GetUserController();
const getUserByCpfController = new GetUserByCpfController();
const getUserByIdController = new GetUserByIdController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

routes.get("/", (req, res) => {
  return res.send({ message: "Hello World!" });
});

routes.get("/usuarios", verifyToken, getUsersController.get_all_users);
routes.get(
  "/usuario/:cpf",
  verifyToken,
  getUserByCpfController.get_user_by_cpf
);
routes.get("/usuario/:id", verifyToken, getUserByIdController.get_user_by_id);
routes.post("/criar-usuario", verifyToken, createUserController.new_user);
routes.post("/autenticar", verifyToken, authenticateUserRequest.authenticate);
routes.put("/remover-usuario", verifyToken, deleteUserController.delete_user);
routes.put(
  "/atualizar-usuario/:cpf",
  verifyToken,
  updateUserController.update_user
);

export { routes };
