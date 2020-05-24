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
    config: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "{}",
      get: function() {
        return JSON.parse(this.getDataValue("config"));
      }
    }
  }, {});
  Tenant.associate = function(models) {
  };
  return Tenant;
};