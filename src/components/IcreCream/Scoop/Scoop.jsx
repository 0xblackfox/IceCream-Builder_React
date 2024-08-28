import PropTypes from 'prop-types';
import React from 'react';
import classes from './Scoop.module.css';

const Scoop = ({ scoop }) => {
  return <div className={[classes.scoop, classes[scoop]].join(" ")} />;
};

Scoop.propTypes = {
  scoop: PropTypes.string.isRequired,
};

export default Scoop;
