import React, { useCallback, useEffect, useState } from 'react';
import DrawerMUI from '@mui/material/Drawer';
import Events from '../../lib/events';

function Drawer({ children, ...props }) {
  const [isOpen, setOpenState] = useState(false);

  useEffect(() => {
    Events.on('toggleAppDrawer', 'toggleAppDrawer', (state) => {
      setOpenState(!!state);
    });
    return () => {
      Events.remove('toggleAppDrawer', 'toggleAppDrawer');
    };
  }, []);

  const toggleDrawer = useCallback((event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenState(!isOpen);
  }, [isOpen]);

  return (
    <DrawerMUI
      open={isOpen}
      onClose={toggleDrawer}
      {...props}
    >
      {children}
    </DrawerMUI>
  );
}

Drawer.defaultProps = {
  anchor: 'left',
};

export default Drawer;
