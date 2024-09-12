import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const MyTrip = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, padding: '7%' }}>

            <Text style={styles.txttop}>List Your Trip</Text>

            <View style={{
                width: '100%',
                padding: '2%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth:1,
                borderRadius:20,
            borderColor: 'lightgrey',
            marginTop:'10%'
            }}>
                <TextInput
                    placeholder='Search destination'
                />
                <Feather
                    name='search'
                    size={30}
                    color='black'
                />
            </View>

            <View style={{gap:10,marginTop:'15%',padding:'5%'}}>
                <Text style={{fontSize:16,color:'black'}}>Kuta Beach </Text>
                <Text style={{color:'red'}} >$1.450,00</Text>
                <Text>🗓  13 Jun 2021 - 15 Jun 2021</Text>
            </View>

            <View style={{gap:10,marginTop:'15%',padding:'5%'}}>
                <Text style={{fontSize:16,color:'black'}}>Kuta Resort </Text>
                <Text style={{color:'red'}} >$145,00</Text>
                <Text>🗓  13 Jun 2021 - 15 Jun 2021</Text>
            </View>
            


        </View>
    )
}

export default MyTrip
const styles = StyleSheet.create({


    button2: {
        width: '90%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 10,
        padding: 14,
        alignSelf: 'center',
        marginBottom: 5


    },

    txt1: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    box2: {
        width: '35%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    box3: {
        width: '35%',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    txttop: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },



})