import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'; 
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';
 

export const ContactScreen = () => {

 
  const { singIn, authState: { isLoggedIn } } =   useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactScreen</Text>

        {
          !isLoggedIn && <Button  
          title='SignIn'
          onPress={ singIn }
          />
        }
        
    </View>
  )
}
 
