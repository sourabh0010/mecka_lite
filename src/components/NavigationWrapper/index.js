import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '../Dialog';
import NavigationBar from '../NavigationBar';

import '../NavigationBar/navigationBar.scss';

function NavigationWrapper({
  children, headerProps: {
    title, leftComponent, rightComponent, variant, disableHeaderShadow, addBottomBorder, classes = '', parentPath, onGoBackClick,
  },
  contentClassName,
}) {
  let style = { boxShadow: '0px 3px 6px 0 rgba(0, 0, 0, 0.12)' };
  if (disableHeaderShadow) {
    style = { boxShadow: 'none' };
  } else if (addBottomBorder) {
    style = { boxShadow: 'none', borderBottom: '1px solid #ccc' };
  }

  return (
    <div>
      <Dialog
        fullScreen
        open
        // onClose={handleClose}
        // TransitionComponent={Transition}
        disableEscapeKeyDown
      >
        <NavigationBar
          title={title}
          variant={variant}
          leftComponent={leftComponent}
          rightComponent={rightComponent}
          style={style}
          classes={classes}
          parentPath={parentPath}
          onGoBackClick={onGoBackClick}
        />
        <div className={contentClassName}>
          {children}
        </div>
      </Dialog>
    </div>
  );
}

NavigationWrapper.defaultProps = {
  title: '',
  variant: 'h6',
  rightComponent: () => {},
  leftComponent: () => {},
  children: () => { /* this is comment */ },
  disableHeaderShadow: false,
  addBottomBorder: false,
  contentClassName: 'content-section',
};
NavigationWrapper.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  leftComponent: PropTypes.func,
  rightComponent: PropTypes.func,
  children: PropTypes.func,
  disableHeaderShadow: PropTypes.bool,
  addBottomBorder: PropTypes.bool,
  contentClassName: PropTypes.string,
};

export default NavigationWrapper;
