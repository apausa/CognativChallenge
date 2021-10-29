import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Home from "./src/screens/home/Home";
import Loading from "./src/screens/loading/Loading";

const App = () => (
  <RecoilRoot>
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  </RecoilRoot>
);

export default App;
