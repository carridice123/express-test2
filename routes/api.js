const express = require('express')
const router = express.Router()
const controllerApi = require('../controlles/api.js')
router.use(controllerApi)
router.get('/api/:rapperName', controllerApi.rapper)

module.exports = router