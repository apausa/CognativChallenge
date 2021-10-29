import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/screens/home/Home";
import Loading from "./src/screens/loading/Loading";

const App = () => (
  <RecoilRoot>
    <Suspense fallback={<Loading />}>
      <NavigationContainer>
        <Home />
      </ NavigationContainer>
    </Suspense>
  </RecoilRoot>
);

export default App;
