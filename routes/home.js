const express = require('express')
const controllerHome = require('../controlles/home.js')
const router = express.Router()


router.get('/', controllerHome.indexHome)

exports.router = router