import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React, {useEffect} from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { styles } from '../theme/appTheme';


// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
       navigation.setOptions({
        // headerLeft: () => (
         //*aca coloco un menu para desplegar el drawer
        //     <Button
        //     title='Menu'
        //     onPress={() => navigation.toggleDrawer()}
        //     />
        // )
       })
    }, [])
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <View style={{ flexDirection: 'row' }}>


            </View>
            <Text>Navegar con argumentos</Text>

            <TouchableOpacity
                style={styles.botonGrande}
                onPress={() => navigation.navigate('PersonaScreen', { nombre: 'pedro', id: 5162 })}
            >
                <Text style={styles.botonGrandeTexto}>Pedro</Text>
            </TouchableOpacity>

        </View>
    )
}
