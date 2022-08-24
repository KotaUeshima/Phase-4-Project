import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function Blog() {

  const [blog, setBlog] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetch(`/blogs/${id}`)
    .then(res => res.json())
    .then(setBlog)
  }, [])

  if(blog == null) return <div>Loading...</div>
  const {title, content, likes, dislikes, category} = blog

  const backgroundStyle = {
    height: '85vh',
    backgroundColor: 'white',
    overflow: 'auto',
  }

  const pageStyle = {
    height: '85vh',
    backgroundColor: 'white',
    margin: '10vh',
    marginTop: '30px'
  }

  return (
    <Container style={backgroundStyle}>
      <Box style={pageStyle}>
        <Grid container>
          <Grid item xs={11}>
            <h1>{title}</h1>
          </Grid>
          <Grid item xs={1}>
            <h2>{category}</h2>
          </Grid>
          <Grid item xs={12}>
            <p>{content}</p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Blog