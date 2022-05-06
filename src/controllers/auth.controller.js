const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const response = require('../response/response')
const JWT_SECRET = process.env.JWT_SECRET

async function register(type, req, res) {
    const roleType = type == 'admin' ? 0 : 1
    const { username } = req.body
    let { password } = req.body
    if (!username || !password) {
        return response.BAD_REQUEST(res)
    }

    const SALT = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, SALT)

    const user = await User.create({ username, password, role: roleType })
    return res.json(user)
}

async function login(type, req, res) {
    const roleType = type == 'admin' ? 0 : 1
    const { username, password } = req.body
    const user = await User.getByUsernameAndRole(username, roleType)

    if (!user) {
        return response.INVALID_CREDENTIALS(res)
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return response.ERROR(res)
        }

        if (!result) {
            return response.INVALID_CREDENTIALS(res)
        }

        const accessToken = jwt.sign({ user_id: user.id, role: user.role }, JWT_SECRET)
        return res.json({ accessToken })
    })
}

module.exports = {
    adminRegister: (req, res) => register('admin', req, res),
    adminLogin: (req, res) => login('admin', req, res),

    userRegister: (req, res) => register('user', req, res),
    userLogin: (req, res) => login('user', req, res)
}
