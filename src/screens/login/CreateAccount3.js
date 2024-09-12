import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const CreateAccount3 = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1,padding: '7%', }}>
            <View style={{  flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount2')}
                >
                    <FontAwesome6
                        name='arrow-left-long'
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>


                <Text style={{ fontSize: 19, marginTop: '16%' }}>Create Your Account</Text>
                <Text style={{ fontSize: 35, marginTop: 10, color: 'black', fontWeight: 'bold', }}>Create a Password</Text>

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
                        style={{ width: '90%',marginLeft:10 }}
                        placeholder='password' />
                </View>
                <Text style={{ marginTop: 10, color: 'grey' }}>Your password must include at least one symbol and be 8 or more character long</Text>






            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('CreateAccount4')}

                style={styles.button2}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black'
                }}>Verification</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CreateAccount3

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
    input: {
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        padding: 2,
        marginTop: '10%',
        borderColor: '#FCD240',

    },
    input2: {
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        padding: 5,
        marginTop: '10%',
        borderColor: 'black',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

}
)

