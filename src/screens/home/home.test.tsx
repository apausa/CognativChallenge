import React, { Suspense } from 'react';
import { render } from '@testing-library/react-native';
import { RecoilRoot } from 'recoil';

import Home from './Home';
import Loading from "../loading/Loading";
import Column from '../../components/column/Column';
import Recommended from '../../components/recommended/Recommended';
import navigationMock from '../../__mocks__/navigationMock';
import itemMock from '../../__mocks__/itemMock';

describe('Given a Home component', () => {
  describe('When renders', () => {
    test('Then matches snapshot', () => {
      const screen = render(
        <Suspense fallback={<Loading/>}>
          <RecoilRoot>
            <Home navigation={navigationMock}>
            </ Home>
          </RecoilRoot>
        </Suspense>,
      )
      expect(screen).toMatchSnapshot;
    });
  })
})
  