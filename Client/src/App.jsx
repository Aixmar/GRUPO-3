import {Routes, Route, useLocation} from "react-router-dom";
import {Landing, Home, About, NavBar, UserForm, UserProfile, PizzaDetail, CreatePizza,AllPizzas} from './views/index'; 


function App() {

  const location = useLocation();

  return(
    <>
      {
        location.pathname !== "/" && <NavBar /> 
      }
  <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/allpizzas" element={<AllPizzas />}></Route>
      <Route path="/createuser" element={<UserForm />}/>
      <Route path="/about" element={<About />}/> 
      <Route path="/pizzadetail/:id" element={<PizzaDetail />}/> 
      <Route path="/profile/:id" element={<UserProfile />}/> 
      <Route path="/createpizza" element={<CreatePizza />}/>
  </Routes>
      


    </>
  ); 

}

export default App;
