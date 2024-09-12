import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const Payment2 = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, }}>

            <View style={{ flex: 1, padding: '7%' }} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '60%'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Payment1')}
                    >

                        <FontAwesome6
                            name='arrow-left-long'
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Payment </Text>
                </View>

                <Image style={{ height: 255, width: 400, marginTop: '10%' }} source={require('../screens/img/card.png')} />

                <View style={styles.input}>
                    <Text style={{
                        position: 'absolute',
                        top: -15,
                        left: 25,
                        padding: 5,
                        backgroundColor: 'white',
                        color: 'lightgrey'
                    }}>Card Number</Text>

                    <TextInput
                        style={{ width: '90%', marginLeft: 10 }}
                        placeholder='343 2322 121'

                    />
                </View>

                <View style={styles.input2}>
                    <Text style={{
                        position: 'absolute',
                        top: -15,
                        left: 25,
                        padding: 5,
                        backgroundColor: 'white',
                        color: 'lightgrey'
                    }}>CVV</Text>

                    <TextInput
                        style={{ width: '90%', marginLeft: 10 }}
                        placeholder='1212 **** **** 3533'

                    />
                </View>








            </View>


            <View style={{
                width: '63%',
                backgroundColor: 'grey',
                padding: 2,
                marginTop: '29%'
            }}>

            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '7%'

            }}>

                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'normal', }}>Total</Text>
                    <Text style={{ color: 'red', fontSize: 20, fontWeight: 'normal', }}>$245.00</Text>
                </View>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('BookingComplete') }
                    style={styles.button2}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'black'
                    }}> Process Payment 
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}


export default Payment2


const styles = StyleSheet.create({
    txt: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        marginBottom: 20,
    },

    txt2: {
        fontWeight: 'bold',
        fontSize: 45,
        color: 'black'
    },
    txt3: {
        color: 'white',
        fontSize: 55,
        fontWeight: 'bold',

    },
    txt4: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',

    },
    View2: {
        backgroundColor: '#FCD240',
        height: 12,
        width: 12,
        position: 'absolute',
        // top: '50%',
        right: '47%',
        borderRadius: 20,

    },

    slider: {
        width: 30,
        height: 10,
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        width: '47%',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 15,
        alignSelf: 'center',
        marginTop: '40%'

    },
    button2: {
        width: '50%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 15,
        padding: '4%',
        alignSelf: 'center',
        marginTop: 20,
    },
    input: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        padding: 3,
        alignSelf: 'center',
        marginTop: '30%',
        borderColor: 'lightgrey',

    },
    input2: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        padding: 3,
        alignSelf: 'center',
        marginTop: '10%',
        borderColor: 'lightgrey',

    },
    icons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',

    },
    urban: {
        fontFamily: 'Urbanist-SemiBoldItalic',
        fontWeight: 'bold',
        fontSize: 45,
        color: 'black'
    },
    button3: {
        width: '47%',
        padding: '4%',
        borderRadius: 15,
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#FCD240'

    },
    button4: {
        width: '47%',
        padding: '4%',
        borderRadius: 15,
        gap: 10,
        alignItems: 'center',
    }

},

)