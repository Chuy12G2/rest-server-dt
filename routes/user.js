const { Router } = require('express')
const { usuariosGet } = require('../controllers/user')



const router = Router()

router.get('/', usuariosGet )


module.exports = router
