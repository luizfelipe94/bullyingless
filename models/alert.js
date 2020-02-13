'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alert = sequelize.define('Alert', {
    description: DataTypes.STRING,
    risk: DataTypes.INTEGER,
    occurenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Alert.associate = function(models) {
    Alert.belongsTo(models.Occurence, { foreignKey: 'occurenceId' });
  };
  return Alert;
};