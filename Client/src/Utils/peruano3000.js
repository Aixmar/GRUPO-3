export const peruanoFiltrador = (props) => {
  const { drinks, filterDrinksTerms } = props;
  const {
    filterSugar,
    selectOrderName,
    selectOrderVolumen,
    selectOrderPrice,
    selectStock,
    selectOrderRating,
    searchBarDrinks,
  } = filterDrinksTerms;

  console.log(selectStock);
  //--aplicar_filtro_por_Sugar------------
  let filteredDrinks = drinks.filter((drink) => {
    if (filterSugar === "") {
      return true;
    } else {
      return drink.detail.onSugar === filterSugar;
    }
  });

  //--aplicar_filtro_por_SearchBar------------
  filteredDrinks = filteredDrinks.filter((drink) => {
    const drinkName = drink.name.trim().toLowerCase();
    const searchValue = searchBarDrinks.trim().toLowerCase();
    console.log(drinkName);
    return drinkName.includes(searchValue);
  });

  //--aplicar_filtro_por_Stock------------
  filteredDrinks = filteredDrinks.filter((drink) => {
    if (selectStock === "") {
      return true;
    } else if (selectStock === "Available") {
      return drink.stock > 0;
    } else return drink.stock === 0;
  });

  //   //--aplicar_filtro_por_Rating-----------
  switch (selectOrderRating) {
    case "Up Rating":
      filteredDrinks.sort((a, b) => b.rating - a.rating);
      break;
    case "Lower Rating":
      filteredDrinks.sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }

  //--aplicar_filtro_por_order_Name----------------
  switch (selectOrderName) {
    case "A-Z":
      filteredDrinks.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z-A":
      filteredDrinks.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  //   //--aplicar_filtro_por_Volumen-----------
  switch (selectOrderVolumen) {
    case "Up Volumen":
      filteredDrinks.sort((a, b) => b.detail.volumen - a.detail.volumen);
      break;
    case "Low Volumen":
      filteredDrinks.sort((a, b) => a.detail.volumen - b.detail.volumen);
      break;
    default:
      break;
  }

  //   //--aplicar_filtro_por_Price-----------
  switch (selectOrderPrice) {
    case "Up Price":
      filteredDrinks.sort((a, b) => b.price - a.price);
      break;
    case "Lower Price":
      filteredDrinks.sort((a, b) => a.price - b.price);
      break;
    default:
      break;
  }

  return filteredDrinks;
};
