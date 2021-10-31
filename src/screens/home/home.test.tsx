import React, { Suspense } from 'react';
import { render } from '@testing-library/react-native';
import { RecoilRoot } from 'recoil';

import Loading from "../loading/Loading";
import Home from './Home';
import navigationMock from '../../mocks/navigationMock';

describe('Given a Home component', () => {
  describe('When renders', () => {
    test('Then matches snapshot', () => {
      const screen = render(
        <Suspense fallback={<Loading/>}>
          <RecoilRoot>
            <Home navigation={navigationMock}/>
          </RecoilRoot>
        </Suspense>,
      )
      expect(screen).toMatchSnapshot;
    });
  })
})
  