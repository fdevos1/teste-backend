import db from "../db.js";

export class GetUsersService {
  async get_all_users() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users`;

      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
