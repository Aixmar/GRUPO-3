const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const createIngredients = require('./src/update/createIngredients');
const createPizzas = require('./src/update/createPizzas');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  
  createIngredients();
  createPizzas();
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
