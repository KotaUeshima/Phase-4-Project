import React from 'react'
import {Link} from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { userState, loggedIn } from './atoms';
import { useSetRecoilState, useRecoilValue} from 'recoil'

function Header() {

  const user = useRecoilValue(userState)
  const setLoggedIn = useSetRecoilState(loggedIn)
  const setUserState = useSetRecoilState(userState)
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const appStyle = {background: 'white', boxShadow: 'none', height: '10vh'}
  const displayAvatar = user.username? user.username.substring(0,1) : "" 

  return (
        <Box sx={{flexGrow: 1}} >
            <AppBar 
            style={appStyle} 
            elevation={4}
            position="sticky">
                <Toolbar>   
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar>{displayAvatar}</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                  sx={{ mt: '45px' }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  >
                    {user.username? 
                    <>
                      <MenuItem>
                          <Typography>My Blogs</Typography>
                      </MenuItem>
                      <MenuItem>
                          <Typography>Create New Blog</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                          <Typography>Logout</Typography>
                      </MenuItem>
                    </>:
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link to='/login'>
                        <Typography>Login</Typography>
                      </Link>
                    </MenuItem>
                    }
                  </Menu>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
  )}
  
export default Header;