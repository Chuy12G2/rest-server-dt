const { request, response } = require('express')

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

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body

    res.json({
        msg: 'Post api',
        nombre,
        edad
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
