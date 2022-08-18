import React from 'react';
import ListItem from '@mui/material/ListItem';

export default function Item({ children, ...props }) {
  return (
    <ListItem {...props}>
      {children}
    </ListItem>
  );
}

Item.defaultProps = {
};

