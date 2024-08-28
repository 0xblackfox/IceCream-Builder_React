import PropTypes from 'prop-types';
import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({scoops}) => {
  // const flavors = Object.keys(items);
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone} />
        {scoops.map(
          scoop=> <Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>
          )}
        <div className={classes.cherry} />
      </div>
    </div>
  );
};

IceCream.propTypes = {
  scoops: PropTypes.object.isRequired,
};

export default IceCream;
