'use strict';
module.exports = (sequelize, DataTypes) => {
  const Defendent = sequelize.define('Defendent', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Defendent.associate = function(models) {
    // associations can be defined here
    Defendent.belongsToMany(models.Denouement);
    Defendent.belongsTo(models.DefendentBlackList);
  };
  return Defendent;
};