import React from 'react';
import ListMUI from '@mui/material/List';

export default function List({ children, ...props }) {
  return (
    <ListMUI {...props}>
      {children}
    </ListMUI>
  );
}

List.defaultProps = {
};

