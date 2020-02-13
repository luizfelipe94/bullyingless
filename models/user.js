'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Profile, { foreignKey: 'profileId' });
    User.belongsTo(models.School, { foreignKey: 'schoolId' });
    User.hasMany(models.Device);
  };
  return User;
};