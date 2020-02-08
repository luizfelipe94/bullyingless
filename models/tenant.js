'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define('Tenant', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    config: DataTypes.STRING
  }, {});
  Tenant.associate = function(models) {
    // associations can be defined here
    Tenant.hasMany(models.School);
  };
  return Tenant;
};