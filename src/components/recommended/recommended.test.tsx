import React, { Suspense } from 'react';
import { render } from '@testing-library/react-native';
import { RecoilRoot } from 'recoil';

import Loading from "../../screens/loading/Loading";
import Recommended from './Recommended';
import navigationMock from '../../__mocks__/navigationMock';

describe('Given a Recommended component', () => {
  describe('When renders', () => {
    test('Then matches snapshot', () => {
      const screen = render(
        <Suspense fallback={<Loading />}>
          <RecoilRoot>
            <Recommended navigation={navigationMock}/>
          </RecoilRoot>
        </Suspense>,
      )
      expect(screen).toMatchSnapshot;
    });
  })
})
