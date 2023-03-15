const { Pizza, Ingredient } = require("../db");

const getAllPizzas = async () => {
  return await Pizza.findAll({
    include: { model: Ingredient, through: { attributes: [] } },
  });
};

const createPizza = async (name, image, userId, ingredientIds) => {
  const newPizza = await Pizza.create({ name, image });
  await newPizza.setUser(userId);
  await newPizza.addIngredients(ingredientIds);
  return newPizza;
};

const getPizza = async (id) => {
  return await Pizza.findByPk(id);
};

module.exports = {
  getAllPizzas,
  createPizza,
  getPizza,
};
