import React from 'react';
import { Avatar, Icon } from '@mui/material';

import Text from '../../../../components/List/Item/Text';

import './auth.scss';

function Auth() {
  return (
    <div className="auth-container">
      <Icon>
        <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>

      </Icon>
      <div className="text-container">
        <Text primary="Sign In/Register" />

      </div>
    </div>
  );
}

export default Auth;

