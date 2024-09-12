import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showpass, setshowpass] = useState(true);

  const Login = () => {
    if (email == 'burhan@gmail.com' || password == "12345") {
      navigation.navigate('Home1')
    }
    else {
      Alert.alert('please Enter correct data')
    }
    // {
    //     Alert.alert('Enter All Data')
    // }
    // else if ( !email.endsWith('@gmail.com')) {
    //     Alert.alert('Wrong Email')
    // }
    // else if(password.length < 8) {
    //     Alert.alert ('Password must be 8 characters')
    // }
    // else if( !phone.startsWith('+92')){
    //     Alert.alert('Must Start with +92')
    // }
    // else if( phone.length < 14){
    //     Alert.alert('Incomplete Phone number')
    // }
    // else {
    //     console.log('Data Submittted')
    // }

  }


  return (

    <View style={{ flex: 1, padding: '7%' }}>
      <View style={{ flex: 1, }}>

        <View style={{ alignItems: 'center', marginTop: '20%' }}>
          <View style={styles.View2}>
          </View>
          <Text style={styles.urban}>traver</Text>
        </View>

        <View style={styles.input}>
          <Text style={{
            position: 'absolute',
            top: -15,
            left: 25,
            padding: 5,
            backgroundColor: 'white',
            color: 'lightgrey'
          }}>Email</Text>

          <TextInput
            style={{ width: '90%', marginLeft: 10 }}
            placeholder='farhanmadni91@gmail.com'
            onChangeText={(val) => setEmail(val)}

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
          }}>Password</Text>

          <TextInput
            style={{ width: '90%', marginLeft: 10 }}
            placeholder='password'
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={showpass}
          />
          <TouchableOpacity
            onPress={() => setshowpass(!showpass)}
          >

            {
              showpass
                ?
                <Entypo
                  name='eye'
                  size={20}
                />
                :
                <Entypo
                  name='eye-with-line'
                  size={20}
                />
            }



          </TouchableOpacity>



        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          padding: 10,
          margin: 15,
        }}>
          <Text>Remember me</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}
          >
            <Text>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('CreateAccount')}
          style={styles.button}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate('Home1')}
          onPress={Login} title='Login'
          style={styles.button2}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Sign In</Text>
        </TouchableOpacity>


      </View >
      <View style={styles.icons}>
        <AntDesign
          name='instagram'
          color='black'
          size={30}
        />

        <AntDesign
          name='google'
          color='black'
          size={30}
        />

        <EvilIcons
          name='sc-facebook'
          size={35}
          color='black'
        />
      </View>
    </View>
  )
}

export default SignUp


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
    width: '100%',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 15,
    alignSelf: 'center',
    marginTop: '40%'

  },


  button2: {
    width: '100%',
    backgroundColor: '#FCD240',
    alignItems: 'center',
    borderRadius: 15,
    padding: '5%',
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
    padding: 5,
    alignSelf: 'center',
    marginTop: '10%',
    borderColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
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

},

)