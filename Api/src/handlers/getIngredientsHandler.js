const { allIngredients } = require("../controllers/ingredientsController");

const getIngredientsHandler = async (req, res, next) => {
  let {name} = req.query
  try {
    const results = await allIngredients(name);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getIngredientsHandler,
};
