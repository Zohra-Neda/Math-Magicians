import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home component correctly', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
