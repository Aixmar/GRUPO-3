const { Pizza, User } = require('../db');

const pizzas = [
    { name: 'muzza', image: 'https://ejemplo.com/aceitunas.jpg', price: 199 },
    { name: 'napolitana', image: 'https://ejemplo.com/jamon.jpg', price: 499 },
    // { name: 'pollo', image: 'https://ejemplo.com/pollo.jpg', price: 699 },
    // { name: 'lomo', image: 'https://ejemplo.com/lomo.jpg', price: 799 },
    // { name: 'cebolla', image: 'https://ejemplo.com/cebolla.jpg', price: 149 },
    // { name: 'champiniones', image: 'https://ejemplo.com/champiniones.jpg', price: 349 },
    // { name: 'tomates', image: 'https://ejemplo.com/tomates.jpg', price: 299 },
    // { name: 'albahaca', image: 'https://ejemplo.com/albahaca.jpg', price: 99 },
    // { name: 'ajo', image: 'https://ejemplo.com/ajo.jpg', price: 49 },
    // { name: 'espinaca', image: 'https://ejemplo.com/espinaca.jpg', price: 199 },
    // { name: 'roquefort', image: 'https://ejemplo.com/roquefort.jpg', price: 599 },
    // { name: 'anchoas', image: 'https://ejemplo.com/anchoas.jpg', price: 399 },
    // { name: 'atún', image: 'https://ejemplo.com/atun.jpg', price: 249 },
    // { name: 'piña', image: 'https://ejemplo.com/pina.jpg', price: 199 },
    // { name: 'mortadela', image: 'https://ejemplo.com/mortadela.jpg', price: 299 },
    // { name: 'oregano', image: 'https://ejemplo.com/oregano.jpg', price: 49 }
  ];
  
const createPizzas = async () => {

  const allPizzasDatabase = await Pizza.findAll();
  if (allPizzasDatabase.length) return;
  
  await Pizza.bulkCreate(pizzas);

  // const allUsers = await User.findAll();

  // pizzas.map(async (pizza) => {
  //   const newPizza = await Pizza.create(pizza);

  //   newPizza.addUser(1);
  // })
};



module.exports = createPizzas;