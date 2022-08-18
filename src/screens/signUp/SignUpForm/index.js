/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Typography } from '@mui/material';


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
      <Typography
        sx={{
          pl: 2, textAlign: 'center', marginBottom: '10px', fontSize: 20,
        }}
        className="login-text"
      >
        Create a New Mecka Account
        {' '}

      </Typography>
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
        <Typography sx={{ textAlign: 'center', fontSize: 8, marginTop: 2 }}>Login into Existing Mecka Account</Typography>
      </Box>
    </div>

  );
}

export default NumberVerification;
