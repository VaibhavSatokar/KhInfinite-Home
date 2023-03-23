import  React from 'react';

import Home_01 from '../assets/media/Home_01.png';
import Home_BG from '../assets/media/Home_BG.png';

import { Grid, Container } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {Fab } from '@mui/material';

import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';

import { KhButton } from './custom/khButton';
import { KhImg } from './custom/KhImg';

export function ExploreKh () {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Box sx={{mt:12}}>
        <Grid container spacing={2} maxWidth='xs' sx={{background:{Home_BG}}}>
          <Grid item md={6}>
            <Box>
              <Typography variant='h2' >Creating a better</Typography>
              <Typography variant='h3' color={'#0f4ba1'} fontWeight={800}>IT Solutions</Typography>
              <Typography variant='h6' mt={3}>Pune based start-up operating in multidimensional service sector. Caters every small & big business and corporate through its services. Patronizes agility and collaborative work culture.</Typography>
              <Grid container spacing={2} mt={5}>
                <Grid item md={6}>
                  <KhButton color='#0f4ba1' title='Connect With Us'/>
                </Grid>
                <Grid item md={6}>
                  <Grid container spacing={2} >
                    <Grid item>
                      <Fab color="primary" aria-label="phone">
                        <PhoneEnabledRoundedIcon />
                      </Fab>
                    </Grid>
                    <Grid item>
                      <Box>
                        <Typography variant='h5' sx={{fontWeight:400}}>+91 8484042169</Typography>
                        <Typography>Call for any question</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6}>
            <KhImg src={Home_01} alt='Explore Kh' />
          </Grid>
        </Grid>
        </Box> 
      </Container>    
    </React.Fragment>
  );
}
