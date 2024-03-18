'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_likes extends Model {
    static associate(models) {
      // define association here
    }
  }
  post_likes.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    post_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'post_likes',
  });
  return post_likes;
};