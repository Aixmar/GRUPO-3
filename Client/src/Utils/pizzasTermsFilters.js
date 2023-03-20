export const pizzasTermsFilters = (props) => {
    const { pizzas, filterPizzasTerms } = props;
    const {
      selectOrderName,
      selectOrderVolumen,
      selectOrderPrice,
      selectStock,
      selectByType,
      selectOrderRating,
      searchBarPizzas,
    } = filterPizzasTerms;

    console.log(selectByType);
    
    //--aplicar_filtro_por_Type------------
    let filteredPizzas = pizzas.filter((pizza) => {
      if (selectByType === "") {
        return true;
      } else {
        return pizza.detail.meatOrVegetarian === selectByType;
      }
    });

    //--aplicar_filtro_por_Stock------------
    filteredPizzas = filteredPizzas.filter((pizza) => {
        if (selectStock === "") {
            return true;
        } else if (selectStock === "Available") {
            return pizza.stock > 0;
        } else return pizza.stock === 0;
    });

    //--aplicar_filtro_por_SearchBar------------
    filteredPizzas = filteredPizzas.filter((pizza) => {
        const pizzaName = pizza.name.trim().toLowerCase();
        const searchValue = searchBarPizzas.trim().toLowerCase();
        return pizzaName.includes(searchValue);
    });
    
    //   //--aplicar_filtro_por_Rating-----------
    switch (selectOrderRating) {
      case "Up Rating":
        filteredPizzas.sort((a, b) => b.rating - a.rating);
        break;
      case "Lower Rating":
        filteredPizzas.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
  
    //--aplicar_filtro_por_order_Name----------------
    switch (selectOrderName) {
      case "A-Z":
        filteredPizzas.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        filteredPizzas.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
  
    //   //--aplicar_filtro_por_Volumen-----------
    switch (selectOrderVolumen) {
      case "Up Volumen":
        filteredPizzas.sort((a, b) => b.detail.volumen - a.detail.volumen);
        break;
      case "Low Volumen":
        filteredPizzas.sort((a, b) => a.detail.volumen - b.detail.volumen);
        break;
      default:
        break;
    }
  
    //   //--aplicar_filtro_por_Price-----------
    switch (selectOrderPrice) {
      case "Up Price":
        filteredPizzas.sort((a, b) => b.price - a.price);
        break;
      case "Lower Price":
        filteredPizzas.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    // console.log(filteredPizzas);

  
    return filteredPizzas;
  };
  