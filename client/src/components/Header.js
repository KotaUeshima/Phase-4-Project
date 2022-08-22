import React from 'react'
import {Link} from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { userState, loggedIn } from './atoms';
import { useSetRecoilState, useRecoilValue} from 'recoil'

function Header() {

  const user = useRecoilValue(userState)
  const setLoggedIn = useSetRecoilState(loggedIn)
  const setUserState = useSetRecoilState(userState)

  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      setLoggedIn(false)
      setUserState({
        username: '',
        id: ''
      })
    })
  }

  const appStyle = {background: 'white', boxShadow: 'none', height: '10vh'}
  const displayName = user.username? user.username : "guest" 

  return (
        <Box sx={{flexGrow: 1}}>
            <AppBar 
            style={appStyle} 
            elevation={2} 
            position="sticky">
                <Toolbar>   
                  <Typography color="black">Welcome Back {displayName}</Typography>
                  <Button onClick={handleLogout}>Logout</Button>
                  <Link to='/login' style={{textDecoration: 'none'}}>
                    <Button>Login</Button> 
                  </Link>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
  )}
  
export default Header;