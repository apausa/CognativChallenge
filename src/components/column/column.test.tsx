import React from 'react';
import renderer from 'react-test-renderer';
import Column from './Column';

describe('Given a Column component', () => {
  describe('When is rendered', () => {
    test('Then matches snapshot', () => {
      const column = renderer.create(<Column />).toJSON();
      expect(column).toMatchSnapshot();
    })
  })
})