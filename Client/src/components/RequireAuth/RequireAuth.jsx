import { useLocation,Navigate,Outlet } from "react-router-dom";
import { useAuthProv } from "../../context/AuthProvider";
import useAuth from "../../Utils/useAuth";

const RequireAuth = ({allowedRol})=>{
    const location = useLocation();
    // const {auth} = useAuth();
    const { user } = useAuthProv();
    console.log(allowedRol);
    console.log(user?.rol)
    console.log(user?.email);
    console.log(user);
    return(
        user?.rol === 'admin' 
        ? (<Outlet />) 
        :  user?.rol === allowedRol 
            ? (<Outlet />) 
            : user?.email
                ? <Navigate to="/unauthorized"  state={{from:location}} replace={true}/>
                :<Navigate to="/home"  state={{from:location}} replace={true}/>
    )
}
export default RequireAuth