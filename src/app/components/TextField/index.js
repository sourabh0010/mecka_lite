import React from 'react';
import TextFieldMUI from '@mui/material/TextField';

function TextField(props) {
  return (
    <TextFieldMUI
      onKeyPress={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
      {...props}
    />
  );
}

TextField.defaultProps = {
  variant: 'standard',
};

export default TextField;
