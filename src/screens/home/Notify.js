import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Notify = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, padding: '7%' }}>


            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '63%'
            }}>
                <TouchableOpacity
                onPress={() => navigation.navigate('DetailBooking')}
                >

                    <FontAwesome6
                        name='arrow-left-long'
                        size={30}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Notification</Text>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginTop: '10%' }}>Today</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10%'
            }}>

                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                    <View style={{
                        backgroundColor: 'lightyellow',
                        width: '20%',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 30,
                        justifyContent: 'center'

                    }}>
                        <FontAwesome6
                            name='ticket'
                            size={20}
                        />
                    </View>
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold', }}>Your Ticket is ready</Text>
                        <Text>Your Ticket is ready,check...</Text>

                    </View>
                </View>

                <View style={{ width: '1%', backgroundColor: 'red', padding: 3, borderRadius: 10, }}></View>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10%'
            }}>

                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                    <View style={{
                        backgroundColor: 'lightyellow',
                        width: '20%',
                        alignItems: 'center',
                        height: 55,
                        borderRadius: 30,
                        justifyContent: 'center'

                    }}>

                        <Image style={{ height: 40, width: 40, tintColor: 'gold' }} source={require('../img/promo.png')} />
                    </View>
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold', }}>Your Ticket is ready</Text>
                        <Text>Your Ticket is ready,check...</Text>

                    </View>
                </View>

            </View>


            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10%'
            }}>

                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                    <View style={{
                        backgroundColor: 'lightyellow',
                        width: '20%',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 30,
                        justifyContent: 'center'

                    }}>
                        <Image style={{ height: 30, width: 30, tintColor: 'gold' }} source={require('../img/succes.png')} />

                    </View>
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold', }}>Your Ticket is ready</Text>
                        <Text>Your Ticket is ready,check...</Text>

                    </View>
                </View>

            </View>



        </View>
    )
}

export default Notify