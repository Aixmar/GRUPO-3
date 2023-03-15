require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");

//-CREATE_DATA_BASE-----------------------------------//
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/mix2pizza`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

//----------------------------------------------------//
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

//----------------------------------------------------//
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Ingredient, Pizza, User } = sequelize.models;

// Aca vendrian las relaciones

// User.belongsToMany(Pizza, { through: "userPizza" });
// Pizza.belongsToMany(User, { through: "userPizza" });

User.hasMany(Pizza);
Pizza.belongsTo(User);

Pizza.belongsToMany(Ingredient, { through: "pizzaIngredient" });
Ingredient.belongsToMany(Pizza, { through: "pizzaIngredient" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
