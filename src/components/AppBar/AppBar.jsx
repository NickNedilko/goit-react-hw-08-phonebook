import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from 'components/AuthNav/AuthNav';
import SiteNav from 'components/SiteNav/SiteNav';
import { useDispatch, useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuthToken } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { profileThunk } from 'redux/profile/profileThunk';


function MyAppBar() {
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  useEffect(() => {
  if(token){
    dispatch(profileThunk())
  }
  }, [dispatch, token])
  
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