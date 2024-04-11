import jwt from "jsonwebtoken";

import { ForbiddenError, UnauthorizedError } from "../helpers/api_errors.js";

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  const secretKey = "placeholder_key";

  if (!token) {
    throw new ForbiddenError("Token não fornecido");
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      throw new UnauthorizedError("Token inválido");
    }

    req.user = { id: decoded.id, nome: decoded.nome };

    next();
  });
}

export default verifyToken;
