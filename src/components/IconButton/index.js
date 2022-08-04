import React from 'react';
import MUIIconButton from '@mui/material/IconButton';

function IconButton({
  className, children, ...props
}) {
  return (
    <div className={className}>
      <MUIIconButton {...props}>{children}</MUIIconButton>
    </div>
  );
}

IconButton.defaultProps = {
  className: 'c-icon-button ',
  variant: '',
};

export default React.memo(IconButton);
