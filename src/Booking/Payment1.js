import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Payment1 = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, }}>

            <View style={{ flex: 1,padding: '7%'  }} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '69%'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DetailBooking')}
                    >

                        <FontAwesome6
                            name='arrow-left-long'
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Payment Methods</Text>
                </View>

                <View style={styles.input2}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10

                    }}>
                        <Image style={{ height: 40, width: 40 }} source={require('../screens/img/mastercard.jpg')} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Credit Card</Text>
                    </View>

                    <AntDesign
                        name='checkcircle'
                        size={18}
                        color='green'
                    />
                </View>

                <View style={styles.input}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10

                    }}>

                        <Entypo
                            name='paypal'
                            size={23}
                            color='blue'
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Paypal</Text>
                    </View>

                    {/* <AntDesign
                        name='checkcircle'
                        size={18}
                        color='green'
                    /> */}
                </View>

                <View style={styles.input}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10

                    }}>
                        <AntDesign
                            name='apple1'
                            size={23}
                            color='black'
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Apple Pay</Text>
                    </View>

                    {/* <AntDesign
                        name='checkcircle'
                        size={18}
                        color='green'
                    /> */}
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: '20%', gap: 10 }}>
                    <AntDesign
                        name='pluscircleo'
                        size={23}

                    />
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Add more</Text>
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
                    padding:'7%'

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
                        onPress={()=> navigation.navigate('Payment2') }
                        style={styles.button2}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: 'black'
                        }}>Payment Method
                        </Text>
                    </TouchableOpacity>

                </View>

        </View>
    )
}

export default Payment1

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
    },
    input: {
        width: '100%',
        borderRadius: 20,
        // borderWidth: 1,
        padding: '4%',
        marginTop: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    input2: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        padding: '4%',
        marginTop: '15%',
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

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