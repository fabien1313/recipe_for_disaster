const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Recipe extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoincrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
      prep_instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cook_instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carbs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_fat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    protein: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sodium: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sugar: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Recipe',
  }
);

module.exports = User;