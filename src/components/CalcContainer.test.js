import React from 'react';
import renderer from 'react-test-renderer';
import Container from './CalcContainer';

describe('Container', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Container total={10} operation="+" next="20" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
