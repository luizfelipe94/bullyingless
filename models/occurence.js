'use strict';
module.exports = (sequelize, DataTypes) => {
  const Occurence = sequelize.define('Occurence', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    local: DataTypes.STRING
  }, {});
  Occurence.associate = function(models) {
    // associations can be defined here
    Occurence.belongsTo(models.School);
    Occurence.hasOne(models.Device);
    Occurence.hasMany(models.Alert);
  };
  return Occurence;
};