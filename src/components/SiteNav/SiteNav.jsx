import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const SiteNav = ()=>{
    return(
        <>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <NavLink to='/contacts'>Contact</NavLink>
        <NavLink to='/home'>Home</NavLink>

          </Typography>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography> */}

         </>
    )
}

export default SiteNav;