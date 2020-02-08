'use strict';
module.exports = (sequelize, DataTypes) => {
  const Denouement = sequelize.define('Denouement', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    punishment: DataTypes.STRING
  }, {});
  Denouement.associate = function(models) {
    // associations can be defined here
    Denouement.belongsTo(models.Occurence);
    Denouement.hasOne(models.Gravity);
    Denouement.belongsToMany(moels.Defendent);
  };
  return Denouement;
};