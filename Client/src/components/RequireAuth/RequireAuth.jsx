import { useLocation,Navigate,Outlet } from "react-router-dom";
import { useAuthProv } from "../../context/AuthProvider";
import useAuth from "../../Utils/useAuth";

const RequireAuth = ()=>{
    const location = useLocation();
    // const {auth} = useAuth();
    const { user } = useAuthProv();
    return(
        user?.email ? (<Outlet />) : <Navigate to="/home"  state={{from:location}} replace={true}/>
    )
}
export default RequireAuth