import  React from 'react';
import {Box, Typography } from '@mui/material';


export interface ITextHeaderProps {
    title : string
    color : string
}

export function TextHeader (props: ITextHeaderProps) {
  return (
    <React.Fragment>
        <Typography variant='h4' color={props.color} fontWeight={800} align='center'>{props.title}</Typography>
        <hr style={{width:200, border: '2px solid #0f4ba1'}}/>
    </React.Fragment>    
  );
}
