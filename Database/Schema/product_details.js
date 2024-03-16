'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_details extends Model {
    static associate(models) {
    }
  }
  product_details.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT(20)
    },
    title: {
      allowNull:false,
      type: Sequelize.STRING(250)
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING(500)
    },
    product_price: {
      allowNull:false,
      type: Sequelize.BIGINT(20)
    },
    creator_id: {
      allowNull:false,
      type: Sequelize.BIGINT(20)
    },
    product_category: {
      allowNull: true,
      type: Sequelize.STRING(250)
    },
    content:{
      allowNull: false,
      type: Sequelize.STRING(500)
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  });
  return product_details;
};