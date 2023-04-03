import { useLocation,Navigate,Outlet } from "react-router-dom";
import { useAuthProv } from "../../context/AuthProvider";
import useAuth from "../../Utils/useAuth";

const RequireAuth = ({allowedRol})=>{
    const location = useLocation();
    // const {auth} = useAuth();
    const { user } = useAuthProv();

    
    return(
        user?.rol === allowedRol 
            ? (<Outlet />) 
            : user?.email
                ? <Navigate to="/unauthorized"  state={{from:location}} replace={true}/>
                :<Navigate to="/home"  state={{from:location}} replace={true}/>
    )
}
export default RequireAuth