import React from 'react';
import { render } from '@testing-library/react';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Buttons handleButtonClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
