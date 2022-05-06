const basicInfo = require('./basic-info')
const servers = require('./servers')
const components = require('./components')
const auth = require('./auth')
const admin = require('./admin')
const user = require('./user')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    paths: {
        ...auth.paths,
        ...admin.paths,
        ...user.paths
    },
}