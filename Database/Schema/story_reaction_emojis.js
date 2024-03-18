'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class story_reaction_emojis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  story_reaction_emojis.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'story_reaction_emojis',
  });
  return story_reaction_emojis;
};