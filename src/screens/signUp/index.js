/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import MenuIcon from '../../app/Sidebar/components/menuBarIcon';
import NavigationWrapper from '../../components/NavigationWrapper';

import LoginForm from './SignUpForm';

function SignUpForm() {
  const [loginInfo, setLoginInfo] = useState({});
  const handleNumberSubmit = useCallback(
    (phoneNumber) => {

    },
    [],
  );

  return (
    <NavigationWrapper headerProps={{
      leftComponent: MenuIcon,
    }}
    >
      <div className="app-content">
        <LoginForm
          onSubmit={handleNumberSubmit}
          isLoadingSendOtp={false}
        />
      </div>
    </NavigationWrapper>
  );
}

export default SignUpForm;

