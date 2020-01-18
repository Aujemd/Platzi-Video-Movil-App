import React from 'react';
import {View, StyleSheet} from 'react-native';

const Layout = props => {
    const {video, loading, loader} = props;
    return(
        <View style={styles.container}>
            <View style={styles.video}>
                {video}
            </View>
            <View style={styles.overlay}>
            {   loading && loader }
            </View>
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '56.25%',
    },
    video:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'black',
    },
    overlay:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Layout;