const { Sequelize } = require('sequelize')
	
const sequelize = new Sequelize('D_lab', 'reboot', 'reboot', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

module.exports = sequelize