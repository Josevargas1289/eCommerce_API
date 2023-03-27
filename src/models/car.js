'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cars.hasOne(models.Users, {foreignKey: 'userId'});
      Cars.hasMany(models.ProductsIncar, {foreignKey: 'carId'})

    }
  }
  Cars.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};