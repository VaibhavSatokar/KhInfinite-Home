import * as React from 'react';

import { Box, Grid } from '@mui/material';
import { Typography, Container } from '@mui/material';

import About from '../assets/media/About.png'
import { TextHeader } from './custom/textHeader';
import { KhButton } from './custom/khButton';
import { KhImg } from './custom/KhImg';

export function AboutUs () {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Box sx={{mt:8}}>
          <TextHeader color='#0f4ba1' title='About Us'/>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={8} md={6}>
                  <Box mt={13}>
                      <Typography variant='h4' fontWeight={500} sx={{}}>We Help IT Companies Scale Engineering Capacity</Typography>
                      <Box mt={3}  mb={5} lineHeight={15}>
                          <Typography variant='h5'>Pune based start-up operating in the multidimensional service sector.</Typography>
                          <Typography variant='h5'>Caters every small & big business and corporate through its services.</Typography>
                          <Typography variant='h5'>Patronizes agility and collaborative work culture.</Typography>
                      </Box>
                      <KhButton color='#0f4ba1' title='Get More Details'/>    
                  </Box>
              </Grid>
              <Grid item xs={4} sm={8} md={6}>
              <KhImg src={About} alt='Explore Kh' />
              </Grid>
          </Grid>
        </Box>
      </Container>  
    </React.Fragment>
  );
}
