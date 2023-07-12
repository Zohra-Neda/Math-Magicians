/*eslint-disable*/
import operate from './operate';
import Big from 'big.js';
test('should add two numbers correctly', () => {
    const result = operate(2, 3, '+');
    expect(result).toMatchSnapshot();
  });
  
  test('should subtract two numbers correctly', () => {
    const result = operate(5, 2, '-');
    expect(result).toMatchSnapshot();
  });
  
  // Add more test cases for other operations
  
  // Test error cases
  test('should handle division by zero', () => {
    const result = operate(10, 0, '÷');
    expect(result).toMatchSnapshot();
  });
  
  test('should handle modulo with zero divisor', () => {
    const result = operate(10, 0, '%');
    expect(result).toMatchSnapshot();
  });