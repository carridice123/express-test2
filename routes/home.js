const express = require('express')
const controllerHome = require('../controlles/home.js')


router.get('/', controllerHome.indexHome)

module.exports = router