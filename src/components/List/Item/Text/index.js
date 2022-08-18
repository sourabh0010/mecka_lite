import React from 'react';
import ListItemText from '@mui/material/ListItemText';

export default function Text({ children, ...props }) {
  return (
    <ListItemText {...props}>
      {children}
    </ListItemText>
  );
}

Text.defaultProps = {
};

