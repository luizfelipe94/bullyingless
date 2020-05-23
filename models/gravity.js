'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gravity = sequelize.define('Gravity', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Gravity.associate = function(models) {
    // Gravity.hasMany(models.User); pq isso ta aqui?
  };
  return Gravity;
};