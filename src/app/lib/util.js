import Events from './events';

const closeAppDrawer = () => {
  Events.trigger('toggleAppDrawer', false);
};

const openAppDrawer = () => {
  Events.trigger('toggleAppDrawer', true);
};

export {
  openAppDrawer,
  closeAppDrawer,
};
