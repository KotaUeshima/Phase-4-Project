import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <footer style={{position: "fixed", bottom: 0}}>
      <Divider/>
        <Box width='100vw' height ='10vh'>
           <Grid container spacing={5}>
              <Grid item xs={3}>
                <Box textAlign="center" padding={1}>
                   BlogSports &reg; 2022
                </Box>
              </Grid>
           </Grid>
        </Box>
    </footer>
  )
}

export default Footer