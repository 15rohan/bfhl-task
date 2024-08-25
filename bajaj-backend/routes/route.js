const express = require('express')
const {getOpCode, sendDetails} = require('../controllers/controller')
const router = express.Router()

router.route('/').get(getOpCode).post(sendDetails)

module.exports = router 