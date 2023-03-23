import * as React from 'react';

import { Box } from '@mui/material'

export interface IKhImgProps {
    src : string
    alt : string
}

export function KhImg (props: IKhImgProps) {
  return (
    <React.Fragment>
      <Box 
          component="img"
          sx={{ 
            alignItems:'center',
            width:'100%',
          }} 
          src={props.src}
          alt={props.alt}
          />
    </React.Fragment>
  );
}
