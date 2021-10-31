import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('Given an App component', () => {
  describe('When is invoked', () => {
    const screen = render(<App />);
    test('Then matches the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});