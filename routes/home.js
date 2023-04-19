const express = require('express')
const controllerHome = require('../controlles/home.js')
router.use(controllerHome)

router.get('/', controllerHome.indexHome)

module.exports = router