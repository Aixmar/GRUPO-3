const { getIngredientsHandler } = require("../handlers/getIngredientsHandler");

const { Router } = require("express");
const ingredientsRouter = Router();

ingredientsRouter.get("/", getIngredientsHandler);

module.exports = ingredientsRouter;
