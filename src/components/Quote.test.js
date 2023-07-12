import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

test('renders Quote component correctly', () => {
  const { container } = render(<Quote />);
  expect(container).toMatchSnapshot();
});
