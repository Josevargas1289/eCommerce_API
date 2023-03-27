'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsIncar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     ProductsIncar.belongsTo(models.Cars, {foreignKey: 'carId'});
     ProductsIncar.belongsTo(models.Products, {foreignKey:'productId'});
    }
  }
  ProductsIncar.init({
    carId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductsIncar',
  });
  return ProductsIncar;
};