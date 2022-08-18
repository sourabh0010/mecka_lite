import React from 'react';

import IconButton from '../../../../components/IconButton';
import Menu from '../../../../images/menu.png';
import { openAppDrawer } from '../../../lib/util';

function MenuIcon() {
  return (
    <IconButton
      edge="start"
      color="inherit"
      disableFocusRipple
      disableRipple
      onClick={openAppDrawer}
    >
      <img src={Menu} alt="menuBar icon" />
    </IconButton>
  );
}
export default MenuIcon;
