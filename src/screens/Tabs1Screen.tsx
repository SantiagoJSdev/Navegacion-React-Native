import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export const Tabs1Screen = () => {

  const {top} = useSafeAreaInsets();
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10
      }}>
      <Text style={styles.title}>Iconos</Text>
      <Text >
        <TouchableIcon iconName="airplane-outline"  />
        <TouchableIcon iconName="add-circle-outline"  />
        <TouchableIcon iconName="airplane-outline"  />
      </Text>

    </View>
  )
}
