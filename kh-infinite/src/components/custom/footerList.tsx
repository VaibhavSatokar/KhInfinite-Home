import React from 'react';

import { List, ListItem, ListItemText } from '@mui/material';

export interface IFooterListProps {
  index : number  
  primeText : string
}

export function FooterList (props: IFooterListProps) {
  return (
    <React.Fragment>
        <List dense>
          <ListItem key={props.index}>
            <ListItemText primary={props.primeText} />
            </ListItem>
        </List>    
    </React.Fragment>
  );
}
