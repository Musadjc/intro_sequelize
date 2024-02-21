const UserModel = require('../models/user.model')

const dbSync = () => {
    try {
        await UserModel.Sync({alter: true})
        console.log('Connected succesful')
    
    } catch (error) {
        console.log(error)
    }
}
//Conectar el modelo con la tabla