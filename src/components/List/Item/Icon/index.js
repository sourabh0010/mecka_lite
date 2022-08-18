import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function Icon({ children, ...props }) {
  return (
    <ListItemIcon {...props}>
      {children}
    </ListItemIcon>
  );
}

Icon.defaultProps = {
};

