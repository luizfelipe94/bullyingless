'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, 
  {}
  );

  User.associate = function (models) {
    User.belongsTo(models.Profile, { foreignKey: 'profileId' });
    User.belongsTo(models.School, { foreignKey: 'schoolId' });
  };

  return User;

};