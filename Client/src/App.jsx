import { Routes, Route, useLocation } from "react-router-dom";
import {
  Landing,
  Home,
  About,
  NavBar,
  UserForm,
  UserProfile,
  PizzaDetail,
  CreatePizza,
  AllPizzas,
  Cart,
  UserLogin,
  Error404,
  AllDrinks,
} from "./views/index";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/allpizzas" element={<AllPizzas />}></Route>
        <Route path="/alldrinks" element={<AllDrinks />}></Route>

        <Route path="/drinks" element={<AllPizzas />}></Route>
        <Route path="/createuser" element={<UserForm />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/pizzadetail/:id" element={<PizzaDetail />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/createpizza" element={<CreatePizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
