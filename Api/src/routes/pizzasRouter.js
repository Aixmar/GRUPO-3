const { Router } = require("express");
const {
  getPizzasHandler,
  postPizzaHandler,
  getPizzaHandler,
} = require("../handlers/pizzasHandlers");
const pizzasRouter = Router();

pizzasRouter.get("/", getPizzasHandler);
pizzasRouter.post("/", postPizzaHandler);
pizzasRouter.get("/:id", getPizzaHandler);

module.exports = pizzasRouter;
