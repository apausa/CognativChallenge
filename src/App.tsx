import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/home/Home";
import Loading from "./screens/loading/Loading";
import Details from "./screens/details/Details";

export default function App() {
  const { Screen, Navigator } = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home}/>
            <Screen name="Details" component={Details}/>
          </Navigator>
        </ NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
}
