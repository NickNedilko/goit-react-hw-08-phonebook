import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';





const SiteNav = ()=>{
    return(
        < >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{display: "flex", gap: '15px'}}>
        <NavLink to='/'><HomeIcon sx={{ color: 'white', fontSize: '30px', children: 'Home'} } /></NavLink>
        <NavLink to='/contacts'>Contact</NavLink>
        </div>

          </Typography>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography> */}

         </>
    )
}

export default SiteNav;