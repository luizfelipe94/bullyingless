'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    studantQty: DataTypes.INTEGER,
    tenantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  School.associate = function(models) {
    School.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
    School.hasMany(models.User);
    School.hasMany(models.Occurence);
    School.hasMany(models.DefendentBlackList);
  };
  return School;
};