import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs1Screen } from '../screens/Tabs1Screen';
import { Tabs2Screen } from '../screens/Tabs2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator'; 
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
  ? <TabsIOS />
  : <TabsAndroid />
}


const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
    sceneAnimationEnabled={ true }
    barStyle={{
      backgroundColor: colores.primary
    }}
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: colores.primary,
      tabBarIcon: ({color, focused}) => {
        let iconName: string = '';

        switch (route.name) {
          case 'Tabs1Screen':
            iconName = "add-circle-outline"
            break;
            case 'TopTabNavigator':
            iconName = "albums-outline"
            break;
            case 'StackNavigator':
            iconName = "heart-circle-outline"
            break;
        
          default:
            break;
        } 
         
        return <Icon name = {`${iconName}`}  size={25} color={color} />
      }
    })}
    >
      <BottonTabAndroid.Screen name="Tabs1Screen" options={{ title: 'Taps1' }} component={Tabs1Screen} />
      <BottonTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Taps2' }} component={TopTabNavigator} />
      <BottonTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottonTabAndroid.Navigator>
  );
}




const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tabs1Screen':
              iconName = 'T1'
              break;
              case 'TopTabNavigator':
              iconName = 'T2'
              break;
              case 'StackNavigator':
              iconName = 'St'
              break;
          
            default:
              break;
          } 
          
          return <Text style={{color}}>{ iconName }</Text>
        }
      })}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      {/* <Tab.Screen name="Tabs1Screen" options={{title: 'Taps1', tabBarIcon: (props) => ( <Text style={{color: props.color}}>T1</Text> ) }} component={Tabs1Screen} />  */}
      <BottonTabIOS.Screen name="Tabs1Screen" options={{ title: 'Taps1' }} component={Tabs1Screen} />
      <BottonTabIOS.Screen name="TopTabNavigator" options={{ title: 'Taps2' }} component={TopTabNavigator} />
      <BottonTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottonTabIOS.Navigator>
  );
}

// screenOptions={{
//   tabBarActiveTintColor: colores.primary,
//   tabBarStyle: {
//     borderTopColor: colores.primary,
//     borderTopWidth: 0,
//     elevation: 0,
//   },
//   tabBarLabelStyle: {
//     fontSize: 15
//   }
// }}  