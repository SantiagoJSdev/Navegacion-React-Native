import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

   const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerPosition: 'left',
        drawerType: ( width >= 768) ? 'permanent' :  'front'  
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={ StackNavigator } />
      <Drawer.Screen name="Article" options={{ title: 'Setting'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}