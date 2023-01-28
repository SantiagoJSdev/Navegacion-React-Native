import React, {useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../theme/appTheme';
 
interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Atras',
      headerBackTitle: 'Atras'
    })
  }, [])
  
  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.title}>Pagina3Screen</Text>
        <Button 
        title='Regresar'
        onPress = { () => navigation.pop()}
        />
        <Button 
        title='Ir a la pagina 1'
        onPress = { () => navigation.popToTop()}
        />
    </View>
  )
}
