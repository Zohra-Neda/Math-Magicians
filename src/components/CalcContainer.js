import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ total, operation, next }) => (
  <div className="calc-container">
    {total}
    {operation}
    {next}
  </div>
);

Container.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Container.defaultProps = {
  operation: null,
  next: null,
};

export default Container;
