import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { NavigationContainer, useNavigation } from '@react-navigation/native'



const CreateAccount4 = () => {
    const navigation= useNavigation()

    return (
        <View style={{ flex: 1,padding: '7%', }}>
            <View style={{  flex: 1 }}>

                <TouchableOpacity  onPress={()=> navigation.navigate('CreateAccount3') }
                >
                <FontAwesome6
                    name='arrow-left-long'
                    size={30}
                    color='black'
                />
                </TouchableOpacity>


                <Text style={{ fontSize: 19, marginTop: '16%' }}>Create Your Account</Text>
                <Text style={{ fontSize: 35, marginTop: 10, color: 'black', fontWeight: 'bold', }}>OTP Verification</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.input}>

                        <TextInput
                            placeholder='1' />
                    </View>
                    <View style={styles.input2}>

                        <TextInput
                            placeholder='2' />
                    </View>
                    <View style={styles.input2}>

                        <TextInput
                            placeholder='3' />
                    </View>
                    <View style={styles.input2}>

                        <TextInput
                            placeholder='4' />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:'5%'}}>
                    <Text style={{ marginTop: 10, color: 'grey' }}>send code reload in </Text>
                    <Text style={{ marginTop: 10, color: 'grey' }}>03:23 </Text>

                </View>





            </View>

            <TouchableOpacity
                    onPress={()=> navigation.navigate('Explore') }

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

export default CreateAccount4

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
        width: '18%',
        borderRadius: 15,
        borderWidth: 1,
        // padding: 2,
        marginTop: '10%',
        borderColor: '#FCD240',
        alignItems:'center',
        paddingLeft:'4%'

    },
    input2: {
        width: '18%',
        borderRadius: 15,
        borderWidth: 1,
        // padding: 2,
        marginTop: '10%',
        borderColor: 'black',
        alignItems:'center',
        paddingLeft:'4%'

    },
    
    
}
)

