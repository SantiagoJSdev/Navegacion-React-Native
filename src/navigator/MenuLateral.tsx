import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
// import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

// const SettingStackCreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//       name='SettingScreen'
//       component={SettingScreen}
//       />
//     </Stack.Navigator>
//   )
// }

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerPosition: 'left',
        drawerType: (width >= 768) ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {


  return (
    <DrawerContentScrollView>

      {/* //* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* //*Opciones */}
      <View style={styles.menuContainer}>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Tabs')}
        style={styles.menuBotton}
        >
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={() => navigation.navigate('SettingScreen')}
        style={styles.menuBotton}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  )
}