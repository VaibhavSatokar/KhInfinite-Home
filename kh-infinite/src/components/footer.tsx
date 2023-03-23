import  React from 'react';

import { Container, Box, Grid, Typography } from '@mui/material';
import {List, ListItem, ListItemText} from '@mui/material'

import { FooterList } from './custom/footerList';
import { Copyright } from './copyright';

const Company = ['About','Services', 'Blogs', 'Contact']
const Solutions = ['UI/UX Services','Industrial Automation','Manpower Services','IT Enable']
const ContactInfo = ['contact@khinfinite.com','info@khscience.in','+91 8484042169']
 
  
export function Footer () {
  return (
    <React.Fragment>
      <Box component="footer" sx={{backgroundColor:'#001d4c', color:'white'}}>
        <Container maxWidth='lg'>  
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={3}>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='h5' fontWeight={800}>Company</Typography>
              {Company.map((data, index)=>(
              <FooterList index={index} primeText={data}/>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='h5' fontWeight={800}>Solutions</Typography>
              {Solutions.map((data, index)=>(
              <FooterList index={index} primeText={data}/>
              ))}
            </Grid>
            <Grid item xs={12}  sm={6} md={3}>
              <Typography variant='h5' fontWeight={800}>Contact Info</Typography>
              {ContactInfo.map((data, index)=>(
              <FooterList index={index} primeText={data}/>
              ))}
            </Grid>    
          </Grid>
          <Copyright />
        </Container>              
      </Box>        
    </React.Fragment>
  );
}
 
