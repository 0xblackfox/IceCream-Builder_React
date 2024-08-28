import PropTypes from 'prop-types';
import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modalBody}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
