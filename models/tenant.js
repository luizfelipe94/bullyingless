'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define('Tenant', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    config: DataTypes.STRING
  }, {});
  Tenant.associate = function(models) {
    Tenant.hasMany(models.School);
  };
  return Tenant;
};