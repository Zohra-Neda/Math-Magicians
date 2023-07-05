import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ handleButtonClick }) => (
  <div className="buttons">
    <button type="button" className="btn gray" onClick={handleButtonClick}>AC</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>+/-</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>%</button>
    <button type="button" className="btn orange" onClick={handleButtonClick}>÷</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>7</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>8</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>9</button>
    <button type="button" className="btn orange" onClick={handleButtonClick}>x</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>4</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>5</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>6</button>
    <button type="button" className="btn orange" onClick={handleButtonClick}>-</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>1</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>2</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>3</button>
    <button type="button" className="btn orange" onClick={handleButtonClick}>+</button>
    <button type="button" className="btn gray span" onClick={handleButtonClick}>0</button>
    <button type="button" className="btn gray" onClick={handleButtonClick}>.</button>
    <button type="button" className="btn orange" onClick={handleButtonClick}>=</button>
  </div>
);

Buttons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};
export default Buttons;
