import React from 'react';
import MUIButton from '@mui/material/Button';

import './button.scss';

function Button({
  children, className, variant, ...props
}) {
  return (
    <div className={className}>
      <MUIButton variant={variant} {...props}>{children}</MUIButton>
    </div>
  );
}

Button.defaultProps = {
  className: 'c-button',
  variant: '',
};

export default React.memo(Button);
