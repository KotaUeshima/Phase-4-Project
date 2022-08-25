import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect} from 'react'

import { userState, loggedIn } from './components/atoms';
import { useSetRecoilState, useRecoilValue} from 'recoil'

import Landing from "./pages/Landing";
import BlogFeed from "./pages/BlogFeed";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import CreateBlog from './pages/CreateBlog'
import MyBlogs from "./pages/MyBlogs";

import {createTheme, ThemeProvider} from '@mui/material/styles'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff1e00"
      }
    },
    typography: {
      fontFamily: 'Quicksand'
    }
  })

  const setLoggedIn = useSetRecoilState(loggedIn)
  const setUserState = useSetRecoilState(userState)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setLoggedIn(true)
          setUserState({
              username: user.username,
              id: user.id
          })
        })
      }
      else{
        console.log('nobody is logged in')
      }
    });
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/feed" element={<BlogFeed/>} />
              <Route path="/blogs/:id" element={<Blog/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/create_blog" element={<CreateBlog/>} />
              <Route path="/my_blogs" element={<MyBlogs/>} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;