import PropTypes from 'prop-types';
import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modalBody}>
        {children}
      </div>
      </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired, 
};

export default Modal;
