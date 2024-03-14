'use strict';
const {
  Model
} = require('sequelize');

const { STATUS, NOTIFICATION_TYPE } = require('../../Config/constant');

module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    static associate(models) {
      // define association here
    }
  }
  notifications.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    notification_type: {
      allowNull: false,
      type: DataTypes.STRING(500),
      defaultValue: NOTIFICATION_TYPE?.INFORMATION
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    archived: {
      allowNull: true,
      type: DataTypes.TINYINT(1),
      defaultValue: STATUS?.NO,
    },
    status: {
      allowNull: false,
      type: DataTypes.TINYINT(1),
      defaultValue: STATUS?.UNREAD,
      comment: "0 => unread 1 => read"
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
    }  }, {
    sequelize,
    modelName: 'notifications',
  });
  return notifications;
};