import React from 'react';
import classes from './ModalForm.module.css';

const ModalForm = () => {
  return (
    <div className={classes.formContainer}>
      <h1>Complete the form below and hit submit</h1>
      <form className={classes.orderForm}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              className={[classes.fieldStyle,classes.fieldSplit,classes.alignLeft].join(" ")}
              placeholder="Name"
            />
            <input
              type="text"
              name="phone"
              className={[classes.fieldStyle,classes.fieldSplit,classes.alignRight].join(" ")}
              placeholder="Phone no."
            />
          </li>
          <li>
            <input
              type="text"
              name="email"
              className={[classes.fieldStyle,classes.fieldFull].join(" ")}
              placeholder="Email"
            />
          </li>
          <li>
            <textarea
              name="address"
              className={classes.fieldStyle}
              placeholder="Address"
            ></textarea>
          </li>
          <li>
            <input type="submit" className={classes.submit} value="Submit Order" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ModalForm;
