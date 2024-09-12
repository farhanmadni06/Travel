import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const NewPassword = () => {
    const navigation = useNavigation()


    const [show, setshow] = useState(false);
    const [showpass1, setshowpass1] = useState(true);
    const [showpass2, setshowpass2] = useState(true);


    return (
        <View style={{ padding: '7%', flex: 1 }}>
            <View style={{ flex: 1 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>

                    <FontAwesome6
                        name='arrow-left-long'
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 19, marginTop: '16%' }}>Forgot Password</Text>
                <Text style={{ fontSize: 35, marginTop: 10, color: 'black', fontWeight: 'bold', }}>Create New Password</Text>

                <View style={styles.input}>
                    <Text style={{
                        position: 'absolute',
                        top: -15,
                        left: 25,
                        padding: 5,
                        backgroundColor: 'white',
                        color: '#FCD240',
                    }}>Password</Text>

                    <TextInput
                        style={{ width: '90%', marginLeft: 10 }}
                        placeholder='Password'
                        keyboardType='password'
                        secureTextEntry={showpass1}
                    />
                    <TouchableOpacity onPress={() => setshowpass1(!showpass1)}>
                        {
                            showpass1
                                ?
                                <Entypo
                                    name='eye-with-line'
                                    size={25}
                                />
                                :
                                <Entypo
                                    name='eye'
                                    size={25}
                                />

                        }
                    </TouchableOpacity>

                </View>

                <View style={styles.input2}>
                    <Text style={{
                        position: 'absolute',
                        top: -15,
                        left: 25,
                        padding: 5,
                        backgroundColor: 'white',
                    }}>Password</Text>

                    <TextInput
                        style={{ width: '90%', marginLeft: 10 }}
                        placeholder='Password'
                        secureTextEntry={showpass2}
                    />

                    <TouchableOpacity onPress={() => setshowpass2(!showpass2)}>
                        {
                            showpass2
                                ?
                                <Entypo
                                    name='eye-with-line'
                                    size={25}
                                />
                                :
                                <Entypo
                                    name='eye'
                                    size={25}
                                />

                        }
                    </TouchableOpacity>


                </View>



                <Text style={{ marginTop: 10, }}>Your password must include at least one symbol and be 8 or more character long</Text>

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}

                style={styles.button2}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black'
                }}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}
export default NewPassword

const styles = StyleSheet.create({


    button2: {
        width: '100%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 20,
        padding: '5%',
        alignSelf: 'center',


    },
    input: {
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        padding: 2,
        marginTop: '10%',
        borderColor: '#FCD240',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    input2: {
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        padding: 2,
        marginTop: '10%',
        borderColor: 'lightgrey',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

}
)

