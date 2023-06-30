import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from 'components/AuthNav/AuthNav';
import SiteNav from 'components/SiteNav/SiteNav';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuthToken } from 'redux/auth/auth-selectors';


function MyAppBar() {
  const token = useSelector(selectAuthToken);
  console.log(token)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <SiteNav/>
            {token ? <UserMenu/> : <AuthNav/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;