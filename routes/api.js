const express = require('express')
const router = express.Router()
const controllerApi = require('../controlles/api.js')

router.get('/api/:rapperName', controllerApi[rapper])

module.exports = router