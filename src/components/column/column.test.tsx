import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Column from './Column';
import itemMock from '../../mocks/itemMock';
import navigationMock from '../../mocks/navigationMock';

describe('Given a Column component', () => {
  let screen: any;
  beforeEach(() => { screen =
    render(<Column item={itemMock} navigation={navigationMock}/>);
  })
  describe('When is rendered', () => {
    test('Then matches snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
    describe('And you press an item', () => {
      test('Then calls "navigation.push()"', () => {
        const item = screen.getByTestId('itemColumn');
        fireEvent.press(item);
        expect(navigationMock.push).toHaveBeenCalled();
      })
    })
  })
})
