'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      // define association here
    }
  }
  posts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    title:{
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    content:{
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    title_description:{
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    location:{
      allowNull: true,
      type: DataTypes.STRING(500)
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    is_like:{
      allowNull: true,
      type: DataTypes.TINYINT(1),
      defaultValue: '1',
      comment: "0 => Not allowed 1 => allowed"
    },
    is_comment:{
      allowNull: true,
      type: DataTypes.TINYINT(1),
      defaultValue: '1',
      comment: "0 => Not allowed 1 => allowed"
    },
    is_share:{
      allowNull: true,
      type: DataTypes.TINYINT(1),
      defaultValue: '1',
      comment: "0 => Not allowed 1 => allowed"
    },
    status: {
      allowNull: false,
      type: DataTypes.TINYINT(1),
      defaultValue: STATUS?.ACTIVE,
      comment: "0 => In Active 1 => Active"
    },
    is_delete: {
      allowNull: false,
      type: DataTypes.TINYINT(1),
      defaultValue: STATUS?.NOTDELETED,
      comment: "0 => Not Deleted 1 => Deleted"
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
    modelName: 'posts',
  });
  return posts;
};