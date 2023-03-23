import React from 'react';
import { Box, Container , Grid, Link } from '@mui/material';

const TermsAndConditions = ['Privacy Policy','Disclaimer','Terms & Conditions'] 

export function Copyright () {
    return (
      <React.Fragment>
          <Box  mt={5} sx={{ py: 3, px: 2, mt: 'auto',backgroundColor:'inherit', color:'inherit'}}>
            <Box>    
              <Container maxWidth='lg'>  
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} sm={12} md={6}>
                    © Copyright 2021. <Link href='https://www.khinfinite.com/'>Kh Infinite Possibilities Pvt. Ltd.</Link> All Rights Reserved.
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid container spacing={{ xs: 4, md: 5 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        {TermsAndConditions.map((data, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            {data}
                        </Grid>
                        ))}
                    </Grid>
                  </Grid>
                  </Grid>    
              </Container>       
            </Box>         
          </Box>      
      </React.Fragment>
    );
  }
  

  
