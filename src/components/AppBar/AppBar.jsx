import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from 'components/AuthNav/AuthNav';
import SiteNav from 'components/SiteNav/SiteNav';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <SiteNav/>
      <AuthNav/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;