import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classes from './ModalForm.module.css';

const ModalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <div className={classes.formContainer}>
      <h1>Complete the form below and hit submit</h1>
      <form className={classes.orderForm} onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              className={[classes.fieldStyle, classes.fieldSplit, classes.alignLeft].join(' ')}
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              className={[classes.fieldStyle, classes.fieldSplit, classes.alignRight].join(' ')}
              placeholder="Phone no."
              value={formData.phone}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="email"
              className={[classes.fieldStyle, classes.fieldFull].join(' ')}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <textarea
              name="address"
              className={classes.fieldStyle}
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <button type="submit" className={classes.submit}>
              Submit Order
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default ModalForm;
