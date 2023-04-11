const express = require('express')

const {login,register,logout} = require('../controllers/authController')
const Router = express.Router()

Router.route('/register').post(register)
Router.route('/login').post(login)
Router.route('/logout').get(logout)

module.exports = Router