const response = require('../response/response')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const JWT_SECRET = process.env.JWT_SECRET

const excludesMiddleware = [
    '/api/auth/admin-register',
    '/api/auth/user-register',
    '/api/auth/admin-login',
    '/api/auth/user-login',
]

module.exports = async (req, res, next) => {
    if (excludesMiddleware.includes(req.originalUrl) || req.originalUrl.match(/api-docs/g)) {
        return next()
    } 
    
    const token = req.header('Authorization')

    if (!token) {
        return response.UNAUTHORIZED(res)
    }

    let decoded
    try {
        decoded = jwt.verify(token, JWT_SECRET)
    } catch(e) {
        return response.UNAUTHORIZED(res)
    }
    
    const { user_id, role } = decoded
    const user = await User.getById(user_id)
    if (!user) {
        return response.UNAUTHORIZED(res)
    }

    if (req.originalUrl == '/admin-page' && role !== 0) {
        return response.FORBIDDEN(res)
    }

    if (req.originalUrl == '/user-page' && role !== 1) {
        return response.FORBIDDEN(res)
    }

    req.user_id = user_id
    req.role = role

    next()
}