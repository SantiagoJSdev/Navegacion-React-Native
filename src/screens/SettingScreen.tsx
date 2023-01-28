import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

export const SettingScreen = () => {

  const { authState } = useContext(AuthContext)

  const insets = useSafeAreaInsets();

  return (
    <View style={{ marginTop: insets.top }}>
      <Text>SettingScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {
        authState.favoriteIcon && (
          <Icon
            name={authState.favoriteIcon}
            size={30}
            color={colores.primary}
          />
        )
      }

    </View>
  )
}
