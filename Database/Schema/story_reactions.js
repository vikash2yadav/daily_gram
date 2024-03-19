'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class story_reactions extends Model {
        static associate(models) {
            // define association here
        }
    }
    story_reactions.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT(20).UNSIGNED
        },
        story_emoji_id: {
            allowNull: false,
            type: DataTypes.BIGINT(20)
        },
        reacted_by: {
            allowNull: false,
            type: DataTypes.BIGINT(20)
        },
        story_id: {
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
        modelName: 'story_reactions',
    });
    return story_reactions;
};