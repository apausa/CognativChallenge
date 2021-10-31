import React from 'react';
import { render } from '@testing-library/react-native';

import Loading from './Loading';

describe('Given a Details component', () => {
  describe('When renders', () => {
    test('Then matches snapshot', () => {
      const screen = render(
        <Loading/>,
      )
      expect(screen).toMatchSnapshot;
    });
  })
})
  