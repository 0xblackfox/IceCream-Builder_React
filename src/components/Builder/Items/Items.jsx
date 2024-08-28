import PropTypes from 'prop-types';
import React from 'react';
import Item from './item/Item';

const Items = ({items,add,remove,scoops}) => {
  const flavors = Object.keys(items);
  console.log(items);
  return (
    <div>
      <ul>
        {flavors.map(
          (flavour) => (
          <Item key={flavour} name={flavour} add={add} remove={remove} scoops={scoops}/> ))
          }
      </ul>
    </div>
  )
}

Items.propTypes = {
  items: PropTypes.node.isRequired,
  add: PropTypes.node.isRequired,
  remove: PropTypes.node.isRequired,
  scoops: PropTypes.node.isRequired,
  };

export default Items
