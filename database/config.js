const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect( process.env.MONGODB_CNN )

        console.log('base de datos online')

    } catch (error) {

        console.log(error)
        throw new Error('Error iniciando base de datos')

    }
}

module.exports = {
    dbConnection,
}
