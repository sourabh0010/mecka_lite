import React from 'react';

import Box from '../../components/Box';
import Drawer from '../../components/Drawer';

import List from '../../components/List';
import Item from '../../components/List/Item';
import Text from '../../components/List/Item/Text';
import MenuBarIcon from './components/menuBarIcon';
import { closeAppDrawer, openAppDrawer } from '../lib/util';
import { UiRoute } from '../constants/uiRoutes';
import useRedirect from '../../hooks/useRedirect';

import './sidebar.scss';
import './components/Auth/auth.scss';

function Sidebar() {
  const { push } = useRedirect();
  const handleOnClick = (path) => () => {
    push(path);
  };

  return (
    <Drawer>
      <Box
        role="presentation"
        onClick={closeAppDrawer}
        onKeyDown={openAppDrawer}
        className="left-sidebar"
      >
        <div className="divider" />
        <List className="menu-links">
          <Item button>
            <Text primary="Menu" />
            <MenuBarIcon />
          </Item>
          <Item onClick={handleOnClick(UiRoute.signup)} button>
            <Text primary="Login / Create account" />
          </Item>
          <Item button>
            <Text primary="Discover Meckas" />
          </Item>
          <Item button>
            <Text primary="Create a New Meckas" />
          </Item>
          <Item button>
            <Text primary="Manage My Meckas" />
          </Item>
          <Item button>
            <Text primary="Private Message" />
          </Item>
          <Item onClick={handleOnClick(UiRoute.profile)} button>
            <Text primary="Edit Profile" />
          </Item>

        </List>
      </Box>
    </Drawer>
  );
}
export default Sidebar;
