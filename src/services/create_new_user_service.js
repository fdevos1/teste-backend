import db from "../db.js";

export class CreateNewUserService {
  async create_new_user(userData) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users SET ?`;

      db.query(query, userData, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
