const { request, response } = require('express')
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario')


const usuariosGet = (req, res = response) => {

    const { q, nombre, apikey, page = 10, limit } = req.query

    res.json({
        msg: 'get API',
        q,
        nombre,
        apikey,
        page,
        limit,
    })
}

const usuariosPost = async (req, res = response) => {



    const { nombre, correo, password, rol } = req.body
    const usuario = new Usuario( {nombre, correo, password, rol})

    const correoExiste = await Usuario.findOne({ correo })
    if( correoExiste ){
        return res.status(400).json({
            msg: 'El correo ya esta registrado'
        })
    }

    const salt = bcryptjs.genSaltSync()

    usuario.password = bcryptjs.hashSync( password, salt)

    await usuario.save()

    res.json({
        msg: 'Post api',
        usuario
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params

    res.json({
        msg: 'Post api',
        id
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}
