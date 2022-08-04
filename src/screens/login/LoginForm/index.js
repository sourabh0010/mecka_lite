/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';

// import { UiRoutes, phoneNumberPattern, numberValidation } from '../../../lib/constants';

import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import Box from '../../../components/Box';

import './loginForm.scss';
import CheckboxLabel from '../../../components/Checkbox';

function NumberVerification({
  onSubmit,
  otpSendResponse,
  isLoadingSendOtp,
}) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleChange = useCallback(({ currentTarget }) => {
    // if (currentTarget?.value?.length <= 10 && numberValidation.test(currentTarget?.value)) {
    //   setValue(currentTarget.value);
    // } else if (!currentTarget?.value) {
    //   setValue(currentTarget.value);
    // }
  }, []);

  const handleSubmit = useCallback(
    // (event) => {
    //   event?.preventDefault();
    //   if (phoneNumberPattern.test(value)) {
    //     setIsValid(true);
    //     if (onSubmit) {
    //       onSubmit(value);
    //     }
    //   } else {
    //     setIsValid(false);
    //   }
    // },
    [value, onSubmit],
  );

  return (
    <div className="login-form">
      <Box component="form" className="box" onSubmit={handleSubmit}>
        <TextField
          value={value}
          autoFocus
          error={!isValid}
          label="phone"
          variant="outlined"
          onChange={handleChange}
          size="medium"
        />
        <TextField
          value={value}
          error={!isValid}
          label="email"
          variant="outlined"
          onChange={handleChange}
          size="medium"
        />
        <TextField
          value={value}
          error={!isValid}
          label="password"
          variant="outlined"
          onChange={handleChange}
          size="medium"
        />
        <CheckboxLabel
          inputProps={{ 'aria-label': 'controlled' }}
          Label="I accept Mecka's TOS/PP"
          style={{ marginLeft: '-40px' }}
        />
        <Button
          className="button-submit"
          size="small"
          onClick={handleSubmit}
          variant="contained"
        >
          Create
        </Button>
      </Box>
    </div>

  );
}

export default NumberVerification;
