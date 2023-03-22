import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "./Utils/useAuth";

import {
  Landing,
  Home,
  About,
  NavBar,
  UserForm,
  UserProfile,
  ItemDetail,
  CreatePizza,
  AllPizzas,
  Cart,
  UserLogin,
  Error404,
  AllDrinks,
  AllSides,
  SideDetail,
  RequireAuth,
  UserAccount,
  UserSettings,
  UserStars,
  UserHistory,
  UserHistoryDetail,

} from "./views/index";

function App() {
  const location = useLocation();
  const {auth} = useAuth();
  const [path,setPath] = useState('')
  return (
    <>

      {location.pathname !== "/" && <NavBar user={auth} />}
      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

        <Route path="/allpizzas" element={<AllPizzas />}></Route>
        <Route path="/alldrinks" element={<AllDrinks />}></Route>
        <Route path="/allsides" element={<AllSides />}></Route>
        <Route path="/drinks" element={<AllPizzas />}></Route>
        <Route path="/createuser" element={<UserForm />} />
        <Route path="/login" element={<UserLogin path={path}/>} />
        <Route path="/about" element={ <About /> } />
        {/* Todo lo que esue dentro de la ruta RequireAuth esta protegido para que solo pueda acceder un usuario logueado */}
        <Route element={<RequireAuth />}>
          
          <Route path="/createpizza" element={<CreatePizza />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Route>
        
        

        <Route path="/itemdetail/:id" element={<ItemDetail />} />
        <Route path="/sidedetail/:id" element={<SideDetail />} />


        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/settings" element={<UserSettings />} />
        <Route path="/profile/account" element={<UserAccount />} />
        <Route path="/profile/stars" element={<UserStars />} />
        <Route path="/profile/history" element={<UserHistory />} />
        <Route path="/profile/history/:id" element={<UserHistoryDetail />} />
        <Route path="/createpizza" element={<CreatePizza />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
