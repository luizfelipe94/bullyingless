'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gravity = sequelize.define('Gravity', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Gravity.associate = function(models) {
    // associations can be defined here
  };
  return Gravity;
};