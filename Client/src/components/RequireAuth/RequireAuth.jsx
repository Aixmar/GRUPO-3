import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "../../Utils/useAuth";

const RequireAuth = ()=>{
    const location = useLocation();
    const {auth} = useAuth();
    return(
        auth?.email ? (<Outlet />) : <Navigate to="/login"  state={{from:location}} replace={true}/>
    )
}
export default RequireAuth