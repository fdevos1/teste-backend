import db from "../db.js";

export class GetUserByCpfService {
  async get_user_by_cpf(cpf) {
    console.log("cpf dentro do try: ", cpf);
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE cpf = ?`;

      db.query(query, [cpf], (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        console.log(result);

        resolve(result);
      });
    });
  }
}
