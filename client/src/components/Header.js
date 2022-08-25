import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { userState, loggedIn } from './atoms';
import { useSetRecoilState, useRecoilValue} from 'recoil'

function Header() {

  const user = useRecoilValue(userState)
  const setLoggedIn = useSetRecoilState(loggedIn)
  const setUserState = useSetRecoilState(userState)
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate()

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
      handleCloseUserMenu()
      navigate('/feed')
    })
  }
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const appStyle = {background: 'white', boxShadow: 'none', height: '10vh'}
  const displayAvatar = user.username? user.username.substring(0,1) : <AccountCircleIcon/>
  const linkStyle = {color: 'black', textDecoration: 'none'}
  const titleStyle = {color: 'black', fontSize: '3rem', fontWeight: '700'}

  return (
        <Box sx={{flexGrow: 1}} >
            <AppBar 
            style={appStyle} 
            elevation={4}
            position="static">
                <Toolbar>                 
                  <Typography style={titleStyle} sx={{flexGrow: 1}}>
                    <Link to="/feed" style={linkStyle}>
                      BlogSports
                    </Link> 
                  </Typography> 
                
                  <Tooltip title="Open settings">
                    <IconButton sx={{mr: 2}} onClick={handleOpenUserMenu}>
                      <Avatar sx={{ bgcolor: '#ff1e00' }}>{displayAvatar}</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                  sx={{ mt: '45px'}}
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
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link to="/my_blogs" style={linkStyle}>
                          <Typography>My Blogs</Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link to="/create_blog" style={linkStyle}>
                          <Typography>Create New Blog</Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                          <Typography>Logout</Typography>
                      </MenuItem>
                    </>:
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link to='/login' style={linkStyle}>
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