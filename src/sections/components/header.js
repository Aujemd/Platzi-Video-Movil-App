import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView, //Componente para que no se mezclen otros elementos de UI con este elemento
} from 'react-native';

const Header  = props => (
<View>
    <SafeAreaView>
     <View style = {styles.container}>
            <Image 
            source = {require('../../../assets/logo.png')}
            style = {styles.logo}
            ></Image>
            <View style = {styles.right}>
                {props.children}
            </View>
     </View>
    </SafeAreaView>  
</View>
);

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 26,
        resizeMode: 'contain', //Hacer que la imagen haga match con el tamaño que se le da
    },
    container:{
        paddingVertical: 10, //Recordar que el padding en react-native no es completo sino horizontal y vertical
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    right:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
export default Header;