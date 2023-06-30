import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = ()=>{
    return(
      <div style={{display: "flex", gap: '15px'}}>
          <Typography variant="h6" component="div" >
          <NavLink to='/register'>Register</NavLink>
          </Typography>
          <Typography variant="h6" component="div"  >
          <NavLink to='/login'>Login</NavLink>
          </Typography>
        </div>
    )
}

export default AuthNav;