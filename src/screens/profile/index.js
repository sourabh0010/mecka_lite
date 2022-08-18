import React from 'react';
import { Avatar } from '@mui/material';

import Button from '../../components/Button';
import NavigationWrapper from '../../components/NavigationWrapper';
import Typography from '../../components/Typography';

import './profile.scss';
import MenuIcon from '../../app/Sidebar/components/menuBarIcon';

function Profile() {
  return (
    <NavigationWrapper headerProps={{
      rightComponent: <Button>edit</Button>,
      leftComponent: MenuIcon,
    }}
    >
      <div className="profile-wrapper">
        <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
        <Typography>Badger</Typography>
        <br />
        <Typography>Denver, Colorado, USA</Typography>
        <Typography>Optional: Age, Gender</Typography>
        <br />
        <Typography>Outdoor Enthusiast who</Typography>
        <Typography>loves music and making new friends!</Typography>
        <br />
        <Button className="profile-button" size="small" style={{ borderRadius: 50 }} variant="outlined">Private Message</Button>
        <br />
        <br />
        <Typography>Belongs to 3 Meckas:</Typography>
        <br />
        <Typography>Red Rocks Amphitheater</Typography>
        <Typography>Coors Fields</Typography>
        <Typography>Denver Bronco’s Fans </Typography>
      </div>
    </NavigationWrapper>
  );
}

export default Profile;
