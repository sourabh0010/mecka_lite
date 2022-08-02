import * as React from 'react';
import MUIRadio from '@mui/material/Radio';
import MUIRadioGroup from '@mui/material/RadioGroup';
import MUIFormControlLabel from '@mui/material/FormControlLabel';

function RadioGroup(props) {
  const {
    formController = [],
    defaultValue,
    controller,
    radioGroupProps,
  } = props;
  return (
    <MUIRadioGroup
      defaultValue={defaultValue}
      name="radio-buttons-group"
      {...radioGroupProps}
    >
      {formController.map((item) => (
        <MUIFormControlLabel
          key="formController"
          value={item?.radioValue}
          control={<MUIRadio onClick={() => controller(item?.radioValue)} />}
          label={item?.radioLabel}
        />
      ))}
    </MUIRadioGroup>
  );
}
export default RadioGroup;
