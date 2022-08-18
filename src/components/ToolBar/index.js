import React from 'react';
import MUIToolBar from '@mui/material/Toolbar';

function Toolbar({
  className, children, ...props
}) {
  return (
    <div className={className}>
      <MUIToolBar {...props}>{children}</MUIToolBar>
    </div>
  );
}

Toolbar.defaultProps = {
  className: 'c-tool-bar',
};

export default React.memo(Toolbar);
