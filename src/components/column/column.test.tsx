import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Column from './Column';
import itemMock from '../../__mocks__/itemMock';
import navigationMock from '../../__mocks__/navigationMock';

describe('Given a Column component', () => {
  let screen: any;
  beforeEach(() => { screen =
    render(<Column item={itemMock} navigation={navigationMock}/>);
  })
  describe('When renders', () => {
    test('Then matches snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
    describe('And item is pressed', () => {
      test('Then calls "navigation.push()"', () => {
        const item = screen.getByTestId('itemColumn');
        fireEvent.press(item);
        expect(navigationMock.push).toHaveBeenCalled();
      })
    })
  })
})
