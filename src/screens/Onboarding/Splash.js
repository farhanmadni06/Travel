import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Splash = () => {
    const navigation= useNavigation()

    return (
        <View style={{ margin: 10, flex: 1 }}>

            <View style={styles.View}>
                <View style={styles.View2}>
                </View>
                <Text style={styles.txt2}>traver</Text>
            </View>

            <Text style={styles.txt}>Version 1.1.0</Text>


        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    txt: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        marginBottom: 20,
    },
    View: {
        alignItems: 'center',
        flex: 0.9,
        justifyContent: 'center'
    },
    txt2: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
    },
    View2: {
        backgroundColor: '#FCD240',
        height: 12,
        width: 12,
        position: 'absolute',
        top: '48%',
        right: '47%',
        borderRadius: 20,
    }
}
)