module.exports = {
    BAD_REQUEST: (res) => {
        res.status(400)
        return res.json({ message: 'Invalid request body format' })
    },

    INVALID_CREDENTIALS: (res) => {
        res.status(401)
        return res.json({ message: 'Invalid user or password' })
    },

    UNAUTHORIZED: (res) => {
        res.status(401)
        return res.json({ message: 'Unauthorized access' })
    },

    FORBIDDEN: (res) => {
        res.status(403)
        return res.json({ message: 'Forbidden access' })
    },

    ERROR: (res) => {
        res.status(500)
        return res.json({ message: 'Internal server error' })
    }
}