import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import { LogBox, Text } from 'react-native';
// LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  //? solo para ios
  const { top } = useSafeAreaInsets();
  //? solo para ios
  return (
    <Tab.Navigator
      style={{
        paddingTop: top, 
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      // screenOptions={{
      //   tabBarPressColor: colores.primary,
      //   tabBarShowIcon: false,
      //   tabBarIndicatorStyle: {
      //     backgroundColor: colores.primary
      //   },
      //   tabBarStyle: { 
      //   shadowColor: 'transparent',
      //   elevation: 0,
      //   }
      // }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle: { 
        shadowColor: 'transparent',
        elevation: 0,
        },
        tabBarActiveTintColor: colores.primary,
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline'
              break;
              case 'ContactScreen':
              iconName = 'people-outline'
              break;
              case 'AlbumsScreen':
              iconName = 'albums-outline'
              break;
               
            default:
              break;
          } 
           
          return <Icon name = {`${iconName}`}  size={25} color={color} />
        }
      })}

    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}