'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class save_posts extends Model {
        static associate(models) {
            // define association here
        }
    }
    save_posts.init({
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
        user_id: {
            allowNull: false,
            type: DataTypes.BIGINT(20)
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
        modelName: 'save_posts',
    });
    return save_posts;
};