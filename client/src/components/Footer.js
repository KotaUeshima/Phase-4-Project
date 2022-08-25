import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <footer style={{position: "fixed", bottom: 0}}>
      <Divider/>
        <Box width='100vw' height ='10vh'>
           <Grid container spacing={5}>
              <Grid item xs={2}>
                <Box textAlign="center" padding={1}>
                   <Typography variant="subtitle1">BlogSports &reg; 2022</Typography>
                </Box>
              </Grid>
           </Grid>
        </Box>
    </footer>
  )
}

export default Footer