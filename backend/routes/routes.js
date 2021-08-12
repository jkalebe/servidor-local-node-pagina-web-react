const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')


router.get('/infor', userCtrl.getList)

router.post('/register', userCtrl.registerUser)

module.exports = router