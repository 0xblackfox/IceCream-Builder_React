import { push, ref } from 'firebase/database';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { database } from '../FireBase/FireBase';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import ModalForm from './Modal/ModalForm/ModalForm';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({ items, price, add, remove, scoops }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartID, setCartID] = useState(null);

  const handleAddToCartClick = () => {
    setShowModal(true);
    generateCartID();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const generateCartID = () => {
    const uniqueID = `cart-${Date.now()}`;
    setCartID(uniqueID);
  };

  const handleOrderSubmit = (formData) => {
    if (!cartID) {
      alert('No cart ID available. Cannot submit order');
      return;
    }

    const orderDetails = {
      ...formData,
      cartID,
      addScoops: scoops,
      price,
      timestamp: Date.now(),
    };


    push(ref(database, 'orders'), orderDetails)
      .then(() => {
        alert('Order submitted successfully!');
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
      });
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
        <Modal>
          <ModalForm onSubmit={handleOrderSubmit} />
          <button onClick={handleCloseModal}>Close</button>
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
