const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { dbConnection } = require('../database/config')


class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //conectar a db
        this.connectDB()

        //middlewares
        this.middlewares()


        this.routes()
    }

    async connectDB(){
        await dbConnection()
    }

    middlewares(){
        //CORS
        this.app.use( cors() )

        this.app.use( express.json() )

        this.app.use( express.static('public') )
    }

    routes(){
       this.app.use( this.usuariosPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', (this.port))
        })
    }
}

module.exports = Server

//password db
//c6ISe1Ye4f5WJgDm
