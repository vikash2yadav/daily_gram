'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_order.init({
    order_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT(20)
    },
    user_id: {
      allowNull: false,
      type: Sequelize.BIGINT(20)
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    phone_number: {
      allowNull: false,
      type: Sequelize.BIGINT(20)
    },
    alternate_number: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    address:{
      allowNull: false,
      type: Sequelize.STRING(500)},
    At: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
  return user_order;
};