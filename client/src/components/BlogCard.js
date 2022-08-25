import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function BlogCard({blog}) {

  const {title, content, id} = blog

  const cardStyle = {
    height: '10vh'
  }

  return (
    <Grid item xs={8} margin="auto"> 
      <Card style={cardStyle} sx={{ ':hover': {boxShadow: 5}}}>
         <CardContent>
          <Link to={`/blogs/${id}`} style={{textDecoration: 'none', color: 'black'}}>
            <Typography variant="h5" component="div" style={{fontWeight:"600"}}>
              {title}
            </Typography>
          </Link>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default BlogCard