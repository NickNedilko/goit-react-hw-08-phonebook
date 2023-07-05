import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth-selectors"

export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {

    const token = useSelector(selectAuthToken);

   return  token ? <Navigate to={redirectTo} /> : <Component/>; 
}