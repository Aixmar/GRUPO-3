const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pizza",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },

      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  );
};
