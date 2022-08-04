import React from 'react';
import InputAdornmentMUI from '@mui/material/InputAdornment';

function InputAdornment({ children, ...props }) {
  return <InputAdornmentMUI {...props}>{children}</InputAdornmentMUI>;
}

InputAdornment.defaultProps = {};

export default InputAdornment;
