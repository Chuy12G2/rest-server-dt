const express = require('express')
const cors = require('cors')
require('dotenv').config()

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //middlewares
        this.middlewares()


        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        this.app.use( express.static('public'))
    }

    routes(){
       this.app.use( this.usuariosPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en perto:', (this.port))
        })
    }
}

module.exports = Server
