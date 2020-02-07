'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    studantQty: DataTypes.INTEGER
  }, {});
  School.associate = function(models) {
    // associations can be defined here
    School.belongsTo(models.Tenant);
  };
  return School;
};