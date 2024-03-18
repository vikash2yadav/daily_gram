'use strict';
const {
  Model
} = require('sequelize');
const { STATUS } = require('../../Config/constant');
module.exports = (sequelize, DataTypes) => {
  class post_comment_reports extends Model {
    static associate(models) {
      // define association here
    }
  }
  post_comment_reports.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    comment_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    report_by: {
      allowNull: false,
      type: DataTypes.BIGINT(20)
    },
    description:{
      allowNull: false,
      type: DataTypes.TEXT
    },
    solution:{
      allowNull: true,
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
    modelName: 'post_comment_reports',
  });
  return post_comment_reports;
};