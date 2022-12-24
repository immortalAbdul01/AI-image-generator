const express = require('express')
const openAiController = require('./../Controllers/openAiController')
const router = express.Router()
router.post('/generateimage', openAiController.generateimage)
module.exports = router