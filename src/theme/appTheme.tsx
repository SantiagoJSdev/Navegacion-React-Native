import { StyleSheet } from "react-native";

export const colores = {
    primary: 'violet'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 5
    },
    botonGrande: {
        width: 100,
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'violet'
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 20
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30 
    },
    menuBotton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20
    } 
    
});