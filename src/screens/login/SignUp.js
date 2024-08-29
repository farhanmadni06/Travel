import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const SignUp = () => {
  return (
    <View style={{ flex: 1, margin: 20 }}>

      <View style={{ alignItems: 'center', marginTop: '20%' }}>
        <View style={styles.View2}>
        </View>
        <Text style={styles.txt2}>traver</Text>
      </View>

      <View style={styles.input}>
        <Text style={{
          position: 'absolute',
          top: -10,
          left: 25,
          backgroundColor: 'white',
          color: 'black'
        }}>Email</Text>

        <TextInput
          style={{ width: '90%' }}
          placeholder='farhanmadni91@gmail.com'
        />
      </View>

      <View style={styles.input2}>
        <Text style={{
          position: 'absolute',
          top: -10,
          left: 25,
          backgroundColor: 'white',
          color: 'black'
        }}>Password</Text>

        <TextInput
          style={{ width: '90%' }}
          placeholder='farhanmadni91@gmail.com'
        />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 10,
        margin: 15,
      }}>
        <Text>Remember me</Text>

        <TouchableOpacity>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Sign In</Text>
      </TouchableOpacity>

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
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center'
  },
  button2: {
    width: '90%',
    backgroundColor: '#FCD240',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    borderRadius: 20,
    borderWidth: 1,
    padding: 8,
    alignSelf: 'center',
    marginTop: '30%',
  },
  input2: {
    width: '90%',
    borderRadius: 20,
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