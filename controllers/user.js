const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.send('Hello')
}

module.exports = {
    usuariosGet
}
