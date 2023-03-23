import React from 'react';
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';

export interface IKhButtonProps {
    title : string
    color : string
}

export function KhButton (props: IKhButtonProps) {
  return (
    <React.Fragment>
      <Button 
      variant="contained" 
      sx={{
        background:`${'props.color'}`, 
        padding:2 , 
        textDecoration:'capitalize'
        }}
        >
            <Typography variant='h6'>{props.title}</Typography>
        </Button>
    </React.Fragment>
  );
}
