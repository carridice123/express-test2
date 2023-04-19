const express = require('express')
const router = express.Router()
const controllerHome = require('../controlles/home.js')
router.use(controllerHome)
router.get('/', controllerHome.indexHome)

module.exports = router