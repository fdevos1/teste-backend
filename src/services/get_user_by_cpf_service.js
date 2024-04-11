import db from "../db.js";

export class GetUserByCpfService {
  async get_user_by_cpf(cpf) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE cpf = ?`;

      db.query(query, [cpf], (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
