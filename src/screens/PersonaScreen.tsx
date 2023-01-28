import React, { useEffect, useContext } from 'react'
import { Text, View } from 'react-native';
import { LogBox } from 'react-native/Libraries/LogBox/LogBox';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;
    const { changeUserName } = useContext(AuthContext)

    useEffect(() => { 
        navigation.setOptions({
            title: params!.nombre
        })
    }, []);

    useEffect(() => {
        changeUserName(params.nombre);
    }, []);
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    params!.nombre// JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
