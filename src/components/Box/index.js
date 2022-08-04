import React from 'react';
import BoxMUI from '@mui/material/Box';

function Box({ children, ...props }) {
  return (
    <BoxMUI {...props}>
      {children}
    </BoxMUI>
  );
}

Box.defaultProps = {
};

export default Box;
