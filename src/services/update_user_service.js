import db from "../db.js";

export class UpdateUserService {
  async update_user(updatedData, cpf) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE users SET ? WHERE cpf = ?`;

      db.query(query, [updatedData, cpf], (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
