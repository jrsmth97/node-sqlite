const repo = require('../db/repo')

class UserModel {
    static async getById(id) {
        return await repo.get("SELECT * FROM users WHERE id = ?", [id])
    }

    static async getByUsername(username) {
        return await repo.get("SELECT * FROM users WHERE username = ?", [username])
    }

    static async getByUsernameAndRole(username, role) {
        return await repo.get("SELECT * FROM users WHERE username = ? AND role = ?", [username, role])
    }

    static async create(user) {
        const insert = await repo.run("INSERT INTO users (username, role, password) VALUES (?, ?, ?)", [user.username, user.role, user.password])
        let newUser = await this.getById(insert.id)
        delete newUser.password
        return newUser
    }
}

module.exports = UserModel
