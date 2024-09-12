import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Explore = () => {
    const navigation= useNavigation()

    return (
        <View style={{ flex: 1,padding: '7%'}}>
         


            <View style={{ flex: 1, padding: '2%', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 150, height: 150 }} source={require('../img/map.png')} />
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', }}>Successfully  created an Account</Text>
                <Text style={{ fontSize: 17, marginTop: '5%' }}>After this you can explore any place you            want.enjoy it </Text>

            </View>
            <TouchableOpacity
                    onPress={()=> navigation.navigate('Explore2') }

            style={styles.button2}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black'
                }}>Let's Explore!</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Explore

const styles = StyleSheet.create({


    button2: {
        width: '100%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 20,
        padding: '5%',
        alignSelf: 'center',
        marginBottom: 5


    },
})