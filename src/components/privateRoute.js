import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth-selectors"

export const PrivatedRoute = ({component: Component, redirectTo = '/'}) => {
    const token = useSelector(selectAuthToken);
const shouldRedirect = !token
   return  shouldRedirect ? <Navigate to={redirectTo} /> : <Component/>; 
}