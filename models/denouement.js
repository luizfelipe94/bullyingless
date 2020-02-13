'use strict';
module.exports = (sequelize, DataTypes) => {
  const Denouement = sequelize.define('Denouement', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    punishment: DataTypes.STRING,
    // occurenceId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    gravityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Denouement.associate = function(models) {
    Denouement.hasOne(models.Occurence, { foreignKey: 'occurenceId' });
    Denouement.hasOne(models.Gravity, { foreignKey: 'gravityId' });
    Denouement.belongsToMany(moels.Defendent, {through: 'denouement_defendent', foreignKey: 'denouementId' });
  };
  return Denouement;
};