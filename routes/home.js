let controllerHome = require('../controlles/home.js')
const express = require('express')
const router = express.Router()


router.get('/', controllerHome.indexHome)

module.exports = router