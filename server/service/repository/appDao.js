import { Database } from 'sqlite3';

class AppDAO {
  constructor(dbFilePath) {
    this.db = new Database(dbFilePath, (err) => {
      if (err) {
        console.log('Could not connect to database', err);
        throw err;
      } else {
        console.log('Connected to database');
      }
    });
  }

  /**
   * Query all
   * @param {*} sql sql string
   * @param {*} params
   * @returns
   */
  async findAll(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * Query one by param
   * @param {*} sql sql string
   * @param {*} params
   * @returns
   */
  async findOne(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * For insert/update/delete
   * @param {*} sql sql string
   * @param {*} params
   * @returns
   */
  async runquery(sql, params = []) {
    return this.db.run(sql, params, (err) => {
      if (err) {
        console.log('Error running sql: ' + sql);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  }

  closeConnect() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
        throw err;
      } else {
        console.log('Closed connect to database');
      }
    });
  }
}

export default AppDAO;
