import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const CreateAccount2 = () => {
    const navigation = useNavigation()

    return (
    <View style={{ padding: '7%',flex: 1 }}>
    <View style={{  flex: 1 }}>

    <TouchableOpacity  onPress={()=> navigation.navigate('CreateAccount') }>

    <FontAwesome6
                name='arrow-left-long'
                size={30}
                color='black'
            />
            </TouchableOpacity>


       
        <Text style={{ fontSize: 19, marginTop: '16%' }}>Create Your Account</Text>
        <Text style={{ fontSize: 35, marginTop: 10, color: 'black', fontWeight: 'bold', }}>And , Your Email</Text>

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
                style={{ width: '90%' ,marginLeft:10}}
                placeholder='Farhan@gmail.com' />
        </View>
        <Text style={{marginTop:10}}>I'd like to received marketing and policy commuication from travor and its partners</Text>

     




    </View>

    <TouchableOpacity 
            onPress={()=> navigation.navigate('CreateAccount3') }

    style={styles.button2}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black'
        }}>Create Password</Text>
    </TouchableOpacity>

</View >
  )
}

export default CreateAccount2

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

