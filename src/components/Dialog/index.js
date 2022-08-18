import React from 'react';
import MUIDialog from '@mui/material/Dialog';

import './dialog.scss';

function Dialog({
  className, children, variant, ...props
}) {
  return <MUIDialog className={className} variant={variant} {...props}>{children}</MUIDialog>;
}

Dialog.defaultProps = {
  variant: 'contained',
  className: 'c-dialog',
};

export default React.memo(Dialog);
