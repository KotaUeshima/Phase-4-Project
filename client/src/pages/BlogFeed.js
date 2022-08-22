import React, {useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard.js'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function BlogFeed() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/blogs")
    .then(res => res.json())
    .then(setBlogs)
  },[])

  const blogcards = blogs.map(blog => {
    return <BlogCard key={blog.title} blog={blog}/>
  })

  const backgroundStyle = {
    minHeight: '85vh',
    backgroundSize: 'cover',
    backgroundColor: '#BEBEBE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Box style={backgroundStyle}>
      <Grid container spacing={2} marginTop="30px">
        {blogcards}
      </Grid>
    </Box>
  )
}

export default BlogFeed