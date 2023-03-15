const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Ingredient",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },

      price: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
