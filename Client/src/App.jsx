import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css"

import {
  Landing,
  Home,
  About,
  NavBar,
  UserForm,
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
  AdminDashboard,
  Users,
  Products,
  CreateProduct,
  CheckOut,
  Unauthorized,
  ForgottenPassword,
  ResetPassword
} from "./views/index";

function App() {
  const location = useLocation();
  const [path,setPath] = useState('')


  return (
    <div className="App">  
      {location.pathname !== "/" && location.pathname !== "/checkout" && <NavBar />}

      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

        <Route path="/allpizzas" element={<AllPizzas />}></Route>
        <Route path="/alldrinks" element={<AllDrinks />}></Route>
        <Route path="/allsides" element={<AllSides />}></Route>
        <Route path="/drinks" element={<AllPizzas />}></Route>
        {/* <Route path="/createuser" element={<UserForm />} /> */}
        {/* <Route path="/login" element={<UserLogin path={path}/>} /> */}
        <Route path="/about" element={ <About /> } />
          <Route path="/createpizza" element={<CreatePizza />} />
{/* Todo lo que esue dentro de la ruta RequireAuth esta protegido para que solo pueda acceder un usuario logueado con el rol asignado */}
        <Route element={<RequireAuth allowedRol={'user'}/>}>         
          <Route path="/profile" element={<UserAccount />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        
        <Route element={<RequireAuth allowedRol={'admin'}/>}>         
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/createProduct" element={<CreateProduct />} />
          
        <Route  path="/forgot" element={<ForgottenPassword />}/>
        <Route path="/resetPassword/:id/:tokenResetPassword" element={<ResetPassword />} />
        <Route path="/itemdetail/:id" element={<ItemDetail />} />
        <Route path="/sidedetail/:id" element={<SideDetail />} />
        <Route path="/profile/settings" element={<UserSettings />} />
        <Route path="/profile/account" element={<UserAccount />} />
        <Route path="/profile/stars" element={<UserStars />} />
        <Route path="/profile/history" element={<UserHistory />} />
        <Route path="/profile/history/:id" element={<UserHistoryDetail />} />
        <Route path="/createpizza" element={<CreatePizza />} />
        CheckOut
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/unauthorized" element={<Unauthorized />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
