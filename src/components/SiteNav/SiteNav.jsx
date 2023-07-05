import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selectors';





const SiteNav = ()=>{
const token = useSelector(selectAuthToken); 
    return(
        < >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{display: "flex", gap: '15px'}}>
        <NavLink to='/'><HomeIcon sx={{ color: 'white', fontSize: '30px', children: 'Home'} } /></NavLink>
        {token && <NavLink to='/contacts'>Contact</NavLink>}
        </div>

          </Typography>
         

         </>
    )
}

export default SiteNav;