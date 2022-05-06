const sqlite3 = require('sqlite3').verbose()
const dbPath = process.env.DB_PATH || ':memory:'
const db = new sqlite3.Database(dbPath)

class Repo {
    static createUserTable() {
        const sql = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, role INTEGER, password TEXT)"
        db.run(sql)
        console.log('Users Table Created')
    }

    static async get(stmt, params) {
        return new Promise((resolve, reject) => {
            db.get(stmt, params, (err, result) => {
                if (err) return reject(err.message)

                return resolve(result)
            })
        })
    }

    static async run(stmt, params) {
        return new Promise((resolve, reject) => {
            db.run(stmt, params, function (err) {
                if (err) return reject(err.message)

                return resolve({
                    id: this.lastID
                })
            })
        })
    }
}

module.exports = Repo