'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User)
      Cart.belongsTo(models.Product)
    }
  };
  Cart.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate (instance, options) {
        instance.status = false
        if(!instance.quantity) instance.quantity = 1
      }
    },
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};