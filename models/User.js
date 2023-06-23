const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("User", {
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  designation: {
    type: DataTypes.TEXT,
  },
  user_desc: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.TEXT,
  },
});

module.exports = User;
