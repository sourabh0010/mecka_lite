import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';

export default function Button({ children, ...props }) {
  return (
    <ListItemButton {...props}>
      {children}
    </ListItemButton>
  );
}

Button.defaultProps = {
};

