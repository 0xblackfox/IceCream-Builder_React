import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => {
    return (
      <div>
        {children}
      </div>
    );
  };
  
  export default Layout;

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
    };