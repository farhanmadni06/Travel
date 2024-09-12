import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Forgot = () => {
    const navigation= useNavigation()
    

    return (
        <View style={{padding:'7%',flex:1}}>
        <View style={{ flex:1}}>

    <TouchableOpacity  onPress={()=> navigation.navigate('SignUp') }>

            <FontAwesome6
                name='arrow-left-long'
                size={30}
                color='black'
            />
           </TouchableOpacity>
            <Text style={{ fontSize: 19, marginTop: '16%' }}>Input Your Email</Text>
            <Text style={{ fontSize: 35, marginTop: 10, color: 'black' }}>Forgot Your Password?</Text>

            <View style={styles.input}>
            <Text style={{
                        position: 'absolute',
                        top: -15,
                        left: 25,
                        padding:5,
                        backgroundColor: 'white',
                        color: '#FCD240',
                    }}>Email</Text>
                <TextInput
                    style={{ width: '90%', marginLeft:10}}
                    placeholder='Ali@gmail.com'
                />

            </View>

            

        </View>
        <TouchableOpacity 
             onPress={()=> navigation.navigate('NewPassword') }

            style={styles.button2}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black'
                }}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Forgot

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
        alignSelf: 'center',
        marginTop: '10%',
        borderColor: '#FCD240',

    },
    input2: {
        width: '90%',
        borderRadius: 20,
        borderColor: '#FCD240',

        borderWidth: 1,
        padding: 8,
        alignSelf: 'center',
        marginTop: '10%',
    },
    icons: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-evenly'
    }
}
)

