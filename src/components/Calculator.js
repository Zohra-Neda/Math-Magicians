import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Container from './CalcContainer';
import Buttons from './Buttons';

const Calculator = () => {
  const [obj, setObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonClick = (e) => {
    setObject(calculate(obj, e.target.innerHTML));
  };

  return (
    <div className="calculator-content">
      <h2 className="calculator-title">Lets do some math!</h2>
      <div className="calculator">
        <Container total={obj.total} operation={obj.operation} next={obj.next} />
        <Buttons handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
