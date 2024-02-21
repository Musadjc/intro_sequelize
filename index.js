const { Sequelize } = require('./db')
	
//Consulta de prueba de funcionamiento
const checkDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connected to DB D_lab')
    } catch (error) {
        console.log(error)
    }
}

checkDB()