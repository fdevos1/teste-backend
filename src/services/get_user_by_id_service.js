import db from "../db.js";

export class GetUserByIdService {
  async get_user_by_id(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = ?`;

      db.query(query, [id], (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
