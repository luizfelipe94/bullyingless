'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alert = sequelize.define('Alert', {
    description: DataTypes.STRING,
    risk: DataTypes.INTEGER
  }, {});
  Alert.associate = function(models) {
    // associations can be defined here
    Alert.belongsTo(models.Occurence);
  };
  return Alert;
};