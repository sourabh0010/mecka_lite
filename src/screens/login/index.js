/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';

import LoginForm from './LoginForm';

function Login() {
  const [loginInfo, setLoginInfo] = useState({});
  const handleNumberSubmit = useCallback(
    // eslint-disable-next-line no-unused-vars
    (phoneNumber) => {

    },
    [],
  );

  return (
    <div className="app-content">
      <LoginForm
        onSubmit={handleNumberSubmit}
        isLoadingSendOtp={false}
      />
    </div>
  );
}

export default Login;

