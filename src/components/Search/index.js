import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedSearchBase({ onChange, props }) {
  return (
    <Paper
      component="form"
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, width: '80%' }}
        placeholder="Serach by Location or Topic"
        onChange={onChange}
        {...props}
      />
    </Paper>
  );
}
