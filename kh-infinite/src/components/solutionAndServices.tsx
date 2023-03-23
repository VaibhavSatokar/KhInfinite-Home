import * as React from 'react';

import { Box, Grid } from '@mui/material';

import { TextHeader } from './custom/textHeader';

export function SolutionAndServices () {
  return (
    <React.Fragment>
      <Box sx={{mt:10}}>
      <TextHeader color='#0f4ba1' title='Solution And Services'/>
        <Grid container columnSpacing={2}>        
        </Grid>
      </Box>
    </React.Fragment>
  );
}
