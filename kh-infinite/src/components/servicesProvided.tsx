import * as React from 'react';

import { Box, Grid } from '@mui/material';
import { TextHeader } from './custom/textHeader';

export function ServicesProvided () {
  return (
    <React.Fragment>
      <Box sx={{mt:10}}>
        <TextHeader color='#0f4ba1' title='What We Do'/>
      </Box>
    </React.Fragment>
  );
}
