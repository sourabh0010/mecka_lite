import React from 'react';
import MUITypography from '@mui/material/Typography';

function Typography({
  className, children, ...props
}) {
  return (
    <div className={className}>
      <MUITypography {...props}>{children}</MUITypography>
    </div>
  );
}

Typography.defaultProps = {
  className: 'c-dialog',
};

export default React.memo(Typography);
