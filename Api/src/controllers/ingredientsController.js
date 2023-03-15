const { Ingredient } = require("../db");
const { Op } = require("sequelize");

const allIngredients = async (name) => {
  let ingredients
  if(name === undefined){
    ingredients = await Ingredient.findAll();
  }else{
    ingredients = await Ingredient.findAll({
      where :{
        name: {
              [Op.iLike]: "%"+name+"%",
          }
      }
  });
  if(!ingredients.length) throw new Error('No se encontro ningun pais con el nombre ingresado');
  }
  return ingredients
};

module.exports = {
  allIngredients,
};
