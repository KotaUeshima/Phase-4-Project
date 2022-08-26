import React, {useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard.js'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

function BlogFeed() {

  const [blogs, setBlogs] = useState([])
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetch("/blogs")
    .then(res => res.json())
    .then(setBlogs)
  },[])

  const filteredBlogs = blogs.filter(blog => {
    if(category == "") {
      return blog
    }
    else{
      if(blog.category == category){
        return blog
      }
    }
  })
  console.log(filteredBlogs)


  const blogCards = filteredBlogs.map(blog => {
    return <BlogCard key={blog.title} blog={blog}/>
  })

  const backgroundStyle = {
    height: '85vh',
    backgroundColor: 'white',
    overflow: 'auto'
  }
  const paperStyle = {height: '7.5vh', width: '20vh'}

  function handleClick(category){
    if(category == 'All'){
      setCategory('')
    }
    else{
      setCategory(category)
    }
  }

  const categories = ['All','NFL', 'NHL', 'MLB', 'NBA', 'Tennis', 'Boxing']

  return (
    <Box style={backgroundStyle}>
      <Box style={{width: '100vw', overflow: 'auto'}}>
      <Grid container spacing={2} margin="50px">
        {categories.map(category => {
        return<Grid item xs={2}>
              <Paper sx={{ ':hover': {boxShadow: 5}}} style={paperStyle} onClick={() => handleClick(category)}>
                <Typography variant="h3" fontWeight='600'>
                  {category}
                </Typography>
              </Paper>
        </Grid>})}
      </Grid>
      </Box>
      <Grid container spacing={2} marginTop="30px" marginBottom="30px">
        {blogCards}
      </Grid>
    </Box>
  )
}

export default BlogFeed