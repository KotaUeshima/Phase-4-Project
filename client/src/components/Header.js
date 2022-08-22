import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


function Header() {

  const appStyle = {background: 'white',boxShadow: 'none', height: '10vh'}

  return (
        <Box sx={{flexGrow: 1}}>
            <AppBar 
            style={appStyle} 
            elevation={2} 
            position="sticky">
                <Toolbar>         
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
  )}
  
export default Header;