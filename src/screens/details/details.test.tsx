import React, { Suspense } from 'react';
import { render } from '@testing-library/react-native';
import { RecoilRoot } from 'recoil';

import Loading from "../loading/Loading";
import Details from './Details';
import detailsMock from '../../__mocks__/detailsMock';

describe('Given a Details component', () => {
  describe('When renders', () => {
    test('Then matches snapshot', () => {
      const screen = render(
        <Suspense fallback={<Loading/>}>
          <RecoilRoot>
            <Details route={detailsMock}/>
          </RecoilRoot>
        </Suspense>,
      )
      expect(screen).toMatchSnapshot;
    });
  })
})
  