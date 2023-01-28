import 'react-native-gesture-handler';
import * as React from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

 

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      <MenuLateral />
      {/* <MenuLateralBasico/> */}
      {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => { 
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}