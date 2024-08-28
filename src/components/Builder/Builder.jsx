import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import ModalForm from './Modal/ModalForm/ModalForm';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({ items, price, add, remove, scoops }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCartClick = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div>
      <div className="builder">
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items} add={add} remove={remove} scoops={scoops} />
        <TotalPrice price={price} />
        <button
          type="button"
          className={[classes.order, 'rounded'].join(' ')}
          onClick={handleAddToCartClick} 
        >
          Add to cart
        </button>
      </div>

      {showModal && (
        <Modal onClose={handleCloseModal}> 
          <ModalForm />
          <button onClick={handleCloseModal} className={classes.closeButton}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

Builder.propTypes = {
  items: PropTypes.node.isRequired,
  price: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  scoops: PropTypes.array.isRequired,
};

export default Builder;
