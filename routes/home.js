const express = require('express')
const router = express.Router()
const controllerHome = require('../controllers/main-home')

router.get('/', controllerHome.home)

module.exports = router