import db from "../db.js";

export class DeleteUserService {
  async delete_user(cpf) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM users WHERE cpf = ?`;

      db.query(query, cpf, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
