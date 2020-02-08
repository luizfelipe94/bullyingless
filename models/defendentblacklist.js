'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefendentBlackList = sequelize.define('DefendentBlackList', {
    a: DataTypes.STRING
  }, {});
  DefendentBlackList.associate = function(models) {
    // associations can be defined here
    DefendentBlackList.belongsTo(models.School);
    DefendentBlackList.hasMany(models.Defendent);
  };
  return DefendentBlackList;
};