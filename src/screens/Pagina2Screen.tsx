import {CommonActions, useNavigation } from "@react-navigation/core";
import React, {useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Atras',
      headerBackTitle: 'Atras'
    })
  }, [])
  
  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.title}>Pagina2Screen</Text>
        <Button 
        title='Ir a pagina 3'
        onPress = { () => navigator.dispatch(CommonActions.navigate({name: 'Pagina3Screen'})) }
        />
    </View>
  )
}
