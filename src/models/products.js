'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Products.belongsTo(models.Users, {foreignKey: 'userId'});
     Products.hasMany(models.ProductsInOrder, {foreignKey: 'producId'});
     Products.hasMany(models.ProductsIncar, {foreignKey: 'productId'});
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    avaliableQty: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    iserId: DataTypes.INTEGER,
    productImage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};