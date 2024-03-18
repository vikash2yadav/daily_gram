'use strict';
const {
  Model
} = require('sequelize');
const { STATUS } = require('../../Config/constant');
module.exports = (sequelize, DataTypes) => {
  class post_comments extends Model {
    static associate(models) {
      // define association here
    }
  }
  post_comments.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    post_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    added_by: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
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
    modelName: 'post_comments',
  });
  return post_comments;
};