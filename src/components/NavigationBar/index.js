import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AppBar from '../AppBar';
import Box from '../Box';
import Toolbar from '../ToolBar';
import IconButton from '../IconButton';
import Typography from '../Typography';
import Menu from '../../images/menu.png';

import './navigationBar.scss';

function GoBack() {
  return (
    <IconButton
      edge="start"
      color="inherit"
      disableFocusRipple
      disableRipple
    //   onClick={onBackArrowClick}
    >
      <img src={Menu} alt="Back Arrow" />
    </IconButton>
  );
}

function NavigationBar({
  title,
  variant,
  leftComponent: LeftComponent,
  rightComponent,
  classes, // pass classes to override default class
  style,
  parentPath,
  onGoBackClick,
}) {
  return (
    <div className="header-section">
      <AppBar
        classes={{
          root: `header-sub-container ${classes}`,
        }}
        sx={{ ...style }}
        disableElevation
      >
        <Toolbar>
          <div>
            <LeftComponent parentPath={parentPath} onGoBackClick={onGoBackClick} />
          </div>
          <Typography
            classes={{
              root: 'heading-style',
            }}
            variant={variant}
            component="div"
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {rightComponent}
        </Toolbar>
      </AppBar>
      {/* <CssBaseline /> */}
    </div>
  );
}
NavigationBar.defaultProps = {
  title: '',
  variant: 'h6',
  leftComponent: GoBack,
  rightComponent: '',
  onHeaderClick: () => { /* this is comment */ },
  classes: '',
};
NavigationBar.propTypes = {
  title: PropTypes.string,
  onHeaderClick: PropTypes.func,
  variant: PropTypes.string,
  leftComponent: PropTypes.func,
  rightComponent: PropTypes.func,
  classes: PropTypes.string,
};
export default memo(NavigationBar);
