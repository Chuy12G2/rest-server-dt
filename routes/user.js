const { Router } = require('express')
const { usuariosGet, usuariosPost, usuariosPut } = require('../controllers/user')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')

const Role = require('../models/role')



const router = Router()

router.get('/', usuariosGet )

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('password', 'El password debe tener mas de 6 letras').isLength({ min: 6 }),
    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( async(rol = '') => {
        const existeRol = await Role.findOne({ rol })

        if( !existeRol ){
            throw new Error(`El rol ${rol} no esta registrado`)
        }
    }),
    validarCampos
] , usuariosPost)

router.put('/:id', usuariosPut)


module.exports = router
