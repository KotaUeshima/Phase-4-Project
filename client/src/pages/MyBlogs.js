import React, {useState, useEffect} from 'react'
import BlogCard from '../components/BlogCard.js'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([])

  useEffect(() => {
    fetch("/user_blogs")
    .then(res => res.json())
    .then(setMyBlogs)
  },[])

  const blogcards = myBlogs.map(blog => {
    return <BlogCard key={blog.title} blog={blog}/>
  })

  const backgroundStyle = {
    height: '85vh',
    backgroundColor: 'white',
    overflow: 'auto'
  }

  return (
    <Box style={backgroundStyle}>
      <Grid container spacing={2} marginTop="30px" marginBottom="30px">
        {blogcards}
      </Grid>
    </Box>
  )
}

export default MyBlogs