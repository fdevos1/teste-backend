import db from "../db.js";

export class DeleteUserService {
  async delete_user(usuario, cpf) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE users SET status = Removido, data_remocao = CURRENT_TIMESTAMP(), usuario_remocao = ? WHERE cpf = ?`;

      db.query(query, [usuario, cpf], (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
