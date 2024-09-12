import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const transparent = 'rgba(0,0,0,0.5)'

const Profile = () => {
    const navigation = useNavigation()

    const [openmodel, setopenmodel] = useState(false);

    function renderModal() {
        return (
            <Modal visible={openmodel}
                animationType='slide'
                transparent={true} >

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    // borderTopLeftRadius: 20,
                    // borderTopRightRadius: 20,
                    backgroundColor: transparent


                }}>

                    <View style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: 'white',
                        padding: '7%',
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: '30%'



                    }}>

                        <View style={{ gap: 20, alignItems: 'center', marginBottom: '20%' }}>

                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
                                Logout
                            </Text>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                Are you sure you want to log out from farhan's account?
                            </Text>
                        </View>

                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            marginBottom: '7%',
                            width: '100%',
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignUp')}

                                style={styles.button2}>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, }}>Logout</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setopenmodel(false)}
                                style={styles.button3}>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, }}> Cancel</Text>
                            </TouchableOpacity>



                        </View>
                    </View>
                </View>
            </Modal>
        )
    }



    return (
        <View style={{ flex: 1, padding: '7%' }}>
            <Text style={styles.txttop}>Your Profile</Text>

            <View style={{ flexDirection: 'row', gap: 10, marginTop: '7%' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 25, }} source={require('../img/boy.jpg')} />

                <View>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Hello, Farhan</Text>
                    <Text>Semerburg, Indonesia</Text>
                </View>
            </View>

            <View style={styles.input}>
                <Text style={{ fontSize: 16, color: 'black' }}>Personal information</Text>
                <Image source={require('../img/profile.png')} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Notify')}
            >
                <View style={styles.input}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Notification</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
                        🔔
                    </Text>
                </View>
            </TouchableOpacity>


            <View style={styles.input}>
                <Text style={{ fontSize: 16, color: 'black' }}>FAQ</Text>

                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
                    💬
                </Text>
            </View>

            <View style={styles.input}>
                <Text style={{ fontSize: 16, color: 'black' }}>Dark Mode</Text>

                <FontAwesome6
                    name='toggle-off'
                    size={25}
                    color="black"
                />
                {/* <FontAwesome6
                    name='toggle-on'
                    size={25}
                    color="black"
                /> */}
            </View>

            <View style={styles.input}>
                <Text style={{ fontSize: 16, color: 'black' }}>Language</Text>
                <Text style={{ fontSize: 17 }}>
                    🌐
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => setopenmodel(true)}

                style={styles.input}>

                <Text style={{ fontSize: 16, color: 'black' }}>Logout</Text>
            </TouchableOpacity>
            {renderModal()}


        </View>
    )
}

export default Profile
const styles = StyleSheet.create({


    button2: {
        width: '48%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 10,
        padding: '4%',
        alignSelf: 'center',
        marginBottom: 5


    },
    button3: {
        width: '48%',
        alignItems: 'center',
        borderRadius: 10,
        padding: '4%',
        alignSelf: 'center',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'grey',


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
        // gap: 10
    },
    box3: {
        width: '35%',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        // gap: 10
    },
    txttop: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        padding: '5%',
        alignSelf: 'center',
        marginTop: '10%',
        borderColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },


})