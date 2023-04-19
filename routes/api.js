const express = require('express')
const router = express.Router()
const controllerApi = require('../controlles/api.js')

router.get('/api/:rapperName', controllerApi.rapper)

exports.router = router