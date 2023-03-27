'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductsInOrder.belongsTo(models.Orders, {foreignKey:'orderid' });
      ProductsInOrder.belongsTo(models.Products, {foreignKey:'producId'})
    }
  }
  ProductsInOrder.init({
    orderid: DataTypes.INTEGER,
    producId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductsInOrder',
  });
  return ProductsInOrder;
};