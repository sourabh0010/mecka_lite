import React from 'react';
import MUIAppBar from '@mui/material/AppBar';

function AppBar({
  children, className, ...props
}) {
  return (
    <div className={className}>
      <MUIAppBar {...props}>{children}</MUIAppBar>
    </div>
  );
}

AppBar.defaultProps = {
  className: 'c-app-bar flex-1',
};

export default React.memo(AppBar);
