const AuthController = require('../controllers/auth.controller')
const AdminController = require('../controllers/admin.controller')
const UserController = require('../controllers/user.controller')
const router = require('express').Router()

router.post('/api/auth/admin-login', AuthController.adminLogin)
router.post('/api/auth/user-login', AuthController.userLogin)
router.post('/api/auth/admin-register', AuthController.adminRegister)
router.post('/api/auth/user-register', AuthController.userRegister)
router.get('/admin-page', AdminController.adminOnly)
router.get('/user-page', UserController.userOnly)

module.exports = router