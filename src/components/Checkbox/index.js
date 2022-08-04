import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckboxLabel({ onChange, Label, style }) {
  return (
    <FormGroup>
      <FormControlLabel sx={style} control={<Checkbox onChange={onChange} />} label={Label} />
    </FormGroup>
  );
}
export default CheckboxLabel;

