require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const Repo = require('./db/repo')
const docs = require('./docs')
const AuthMiddleware = require('./middlewares/auth.middleware')
const AuthRoutes = require('./routes/auth.route')
const APP_PORT = process.env.APP_PORT

app.use(bodyParser.json())
app.use(AuthMiddleware)
app.use(cors({
    origin: '*'
}))

Repo.createUserTable()

app.use(AuthRoutes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))
app.listen(APP_PORT, () => console.log(`App listen on port ${APP_PORT}`))