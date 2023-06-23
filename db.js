const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('practice', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})
module.exports=sequelize;