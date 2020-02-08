'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    studantQty: DataTypes.INTEGER
  }, {});
  School.associate = function(models) {
    // associations can be defined here
    School.belongsTo(models.Tenant, {foreignKey: 'tenantId'});
    School.hasMany(models.User);
    School.hasMany(models.Occurence);
    School.hasOne(models.DefendentBlackList);
  };
  return School;
};